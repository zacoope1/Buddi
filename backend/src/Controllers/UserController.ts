import express from 'express';
import { firebaseAdmin } from '../index';
import { UserUpdateRequest } from '../Models/User';

export const UserController = express.Router();

/* Get Current User */
UserController.get('/', async (req, res) =>
  firebaseAdmin
    .auth()
    .getUser(req.app.locals.claims.uid)
    .then(user => res.status(200).send({ message: `${user.displayName} found!`, user }))
    .catch(error => res.status(404).send({ message: 'User not found!' })),
);

/* Update User  */
UserController.post('/', async (req, res) => {
  const updateRequest: UserUpdateRequest = req.body.userUpdateRequest;
  console.log(updateRequest);
  !updateRequest && res.status(400).send({ message: 'userUpdateRequest is empty or does not exist!' });
  firebaseAdmin
    .auth()
    .updateUser(
      req.app.locals.claims.uid,
      updateRequest.email ? { ...updateRequest, emailVerified: false } : updateRequest,
    )
    .then(user => res.status(200).send({ message: `${user.displayName} Updated!`, user }))
    .catch(error => res.status(500).send({ message: 'User not updated!' }));
});

/* Delete User */
UserController.delete('/', async (req, res) =>
  firebaseAdmin
    .auth()
    .deleteUser(req.app.locals.claims.uid)
    .then(() => res.status(200).send({ message: `User ${req.app.locals.claims.email} deleted!` }))
    .catch(error => res.status(500).send({ message: `User '${req.app.locals.claims.email}' could not be deleted!` })),
);
