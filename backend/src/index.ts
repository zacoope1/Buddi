import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import FirebaseAdmin from 'firebase-admin';
import http from 'http';
import { Server } from 'socket.io';
import { UserController } from './Controllers/UserController';
import { getEnvironementVariable } from './Helpers/EnvrironmentHelper';
import { getFirebaseConfig } from './Helpers/FirebaseConfigSetup';
import { EventController } from './Controllers/EventController';
import { FriendshipController } from './Controllers/FriendshipController';
import { InviteController } from './Controllers/InviteController';
import { PostController } from './Controllers/PostController';
import { SessionController } from './Controllers/SessionController';
import { setChatEvents } from './SocketControllers/ChatController';
import { printDebug, log } from './Helpers/Logger';

dotenv.config();

const PORT = getEnvironementVariable('SERVER_PORT');
export const DEBUG_MODE_ENABLED = getEnvironementVariable('DEBUG_MODE_ENABLED', false) || false;

if (!PORT) {
  console.error('Failed To Retrieve Server Port From Environment.');
  process.exit(1);
}

const FIREBASE_CONFIG = getFirebaseConfig();

if (FIREBASE_CONFIG === undefined) {
  console.error('Failed To Retrieve Firebase Config From Environment.');
  process.exit(1);
}

const serviceAccount = require('../firebase-config.json');

if (!serviceAccount) {
  console.error('Failed To Retrieve Firebase Service Account From firebase-config.json.');
  process.exit(1);
}

export const firebaseAdmin = FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
});

const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['*', 'Authorization'] },
});

app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: ['*', 'Authorization'],
    credentials: true,
  }),
);
app.use(express.json());

/* Give all requests access to io */
app.use((req, res, next) => {
  req.app.locals.io = io;
  return next();
});

/* Authorization */
const checkAuth = async (req: any, res: any, next: any) => {
  console.log('Checking auth');
  if (req.headers.authorization) {
    firebaseAdmin
      .auth()
      .verifyIdToken(req.headers.authorization, true)
      .then(claims => {
        if (!claims.email_verified) throw 'Error: Email Not Verified!';
        else {
          req.app.locals.claims = { uid: claims.uid, email: claims.email };
          next();
        }
      })
      .catch(error => {
        res.status(403).send(error.message);
      });
  } else {
    res.status(400).send('Bad Request');
  }
};

/* io Auth */
io.use((socket, next) => {
  if (socket.request.headers.authorization) {
    firebaseAdmin
      .auth()
      .verifyIdToken(socket.request.headers.authorization, true)
      .then(claims => {
        if (!claims.email_verified) next(new Error('Error: Email Not Verified!'));
        else {
          next();
        }
      })
      .catch(error => {
        next(new Error('Not authorized'));
      });
  } else {
    next(new Error('No Auth Token Present'));
  }
});

/* Add Authorization Before Endpoint */
app.use('/user', checkAuth);
app.use('/event', checkAuth);
app.use('/friend', checkAuth);
app.use('/invite', checkAuth);
app.use('/post', checkAuth);
app.use('/session', checkAuth);

/* Add Controllers to Router */
app.use('/user', UserController);
app.use('/event', EventController);
app.use('/friend', FriendshipController);
app.use('/invite', InviteController);
app.use('/post', PostController);
app.use('/session', SessionController);

/* io */
setChatEvents(io);

/* Start Servers */
server.listen(PORT, () => {
  console.log('\n\n');
  log(`Server Started On Port: ${PORT}`);
  printDebug('DEBUG MODE ENABLED!');
});
