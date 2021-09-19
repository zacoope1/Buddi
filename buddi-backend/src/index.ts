import * as dotenv from 'dotenv';
import express, { application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { getEnvironementVariable } from './Shared/EnvrironmentHelper';
import { UserController } from './Controllers/User/UserController';

dotenv.config();

const PORT = getEnvironementVariable('SERVER_PORT');

if (!PORT) {
  console.error('Failed to retrieve port from envionment.');
  process.exit(1);
}

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

/* Add Controllers to Router */
app.use('/user', UserController);

/* Start Server */
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
