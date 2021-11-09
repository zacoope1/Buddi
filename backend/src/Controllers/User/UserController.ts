import express from 'express';

export const UserController = express.Router();

UserController.get('/', async (req, res) => {
  console.log('Get!');
  res.send('Hello, world!');
});

UserController.post('/', async (req, res) => {
  console.log('Post!');
  console.log(req.body);
  res.send('Hello, world!');
});

UserController.put('/', async (req, res) => {
  console.log('Put!');
  console.log(req.body);
  res.send('Hello, world!');
});

UserController.delete('/', async (req, res) => {
  console.log('Delete!');
  res.send('Hello, world!');
});
