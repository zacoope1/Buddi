import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { getEnvironementVariable } from './Shared/EnvrironmentHelper';
import { UserController } from './Controllers/User/UserController';
import { getFirebaseConfig, getFirebaseApp } from './Controllers/User/FirebaseController';
import FirebaseAdmin from 'firebase-admin';

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

const admin = FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
});

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

/* Authorization */
const checkAuth = (req: any, res: any, next: any) => {
  if (req.headers.authtoken && admin.auth().verifyIdToken(req.headers.authtoken)) {
    next();
  } else {
    res.status(403).send('Unauthorized!');
  }
};

/* Add Authorization Before Endpoint */
// app.use('/user', checkAuth); Example to add auth to UserController

/* Add Controllers to Router */
app.use('/user', UserController);

/* Start Server */
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
