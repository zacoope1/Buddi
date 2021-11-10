import { MongoClient } from 'mongodb';
import { exit } from 'process';
import { getEnvironementVariable } from './EnvrironmentHelper';
require('dotenv').config();

const getConnectionString = (): string | null => {
  const protocol = getEnvironementVariable('MONGO_DB_PROTOCOL');
  const ip = getEnvironementVariable('IP_ADDRESS');
  const port = getEnvironementVariable('MONGO_DB_PORT');
  const username = getEnvironementVariable('MONGO_DB_USERNAME');
  const password = getEnvironementVariable('MONGO_DB_PASSWORD');

  if (protocol && ip && port && username && password) {
    return `${protocol}${username}:${password}@${ip}:${port}/?authMechanism=DEFAULT`;
  } else {
    return null;
  }
};

const getMongoClient = (): MongoClient => {
  const url = getConnectionString();

  if (!url) {
    console.log('Could Not Create MongoDB Client. Connection String null');
    exit(1);
  }

  return new MongoClient(url);
};

export const MongoDBClient: MongoClient = getMongoClient();

export const DBNAME = getEnvironementVariable('MONGO_DB_NAME');
