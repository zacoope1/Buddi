import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { UserController } from './Controllers/User/UserController';
import FirebaseAdmin from 'firebase-admin';
import { getEnvironementVariable } from './Helpers/EnvrironmentHelper';
import { getFirebaseConfig } from './Controllers/Firebase/FirebaseConfigSetup';
dotenv.config();

const PORT = getEnvironementVariable('SERVER_PORT');

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

const firebaseAdmin = FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
});

const app = express();
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

/* Authorization */
const checkAuth = async (req: any, res: any, next: any) => {
  if (req.headers.authorization) {
    firebaseAdmin
      .auth()
      .verifyIdToken(req.headers.authorization, true)
      .then(claims => {
        if (!claims.email_verified) throw 'Error: Email Not Verified!';
        next();
      })
      .catch(error => {
        res.status(403).send(error.message);
      });
  } else {
    res.status(400).send('Bad Request');
  }
};

/* Add Authorization Before Endpoint */
app.use('/user', checkAuth); //Example to add auth to UserController

/* Add Controllers to Router */
app.use('/user', UserController);

/* Start Server */
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
