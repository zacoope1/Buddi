import express from 'express';

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

export const InviteController = express.Router();
