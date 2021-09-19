import express, { Request, Response } from 'express';
import { NewUserRequest, User } from '../../Models/User';
import * as bcrypt from 'bcrypt';
import moment from 'moment';
import { executeCreateQuery } from '../../Shared/PostgresClient';
import { createUserString } from './UserQueries';

export const UserController = express.Router();

UserController.post('/create', async (req, res) => {
  const newUser: NewUserRequest = req.body;

  !newUser && res.status(400).send({ message: 'Unable to create user' });

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(newUser.password, salt);

  const user: User = {
    ...newUser,
    hash,
    salt,
    accountCreated: `${Date.now()}`,
  };

  //Save to DB
  const result = await executeCreateQuery(createUserString(user));
  if (result === true) {
    res.status(201).send({
      message: `User: '${newUser.username}' created at ${moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}.`,
    });
  } else {
    res.status(500).send({ message: 'Failed to create user. (Database Error)' }); //TODO: More Robust Error handling.
  }
});
