import express from 'express';

export const EventController = express.Router();

// await MongoDBClient.connect()
//   .then(() => {
//     console.log('Connected!');
//     const db = MongoDBClient.db(DBNAME);
//     const collection = db.collection('documents');
//     res.status(200).send({ message: 'Hello, world!' });
//   })
//   .catch(() => {
//     console.log('Failed To Connect.');
//     res.status(500).send({ message: 'Database Error' });
//   });

EventController.get('/', async (req, res) => {});

EventController.post('/', async (req, res) => {});
