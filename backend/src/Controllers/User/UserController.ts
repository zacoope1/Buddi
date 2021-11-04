import express, { Request, Response } from 'express';
import { NewUserRequest, User } from '../../Models/User';

export const UserController = express.Router();

UserController.get('/', async (req, res) => {
  console.log('Hit!');
  res.send('Hello, world!');
});
