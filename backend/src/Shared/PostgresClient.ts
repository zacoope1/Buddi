import * as pg from 'pg';
import { User } from '../Models/User';
import { getEnvironementVariable } from './EnvrironmentHelper';

export const getPostgresConfig = (): pg.ClientConfig => {
  return {
    user: getEnvironementVariable('DB_USER_NAME'),
    password: getEnvironementVariable('DB_PASSWORD'),
    database: getEnvironementVariable('DB_NAME'),
    host: getEnvironementVariable('IP_ADDRESS'),
    port: Number(getEnvironementVariable('DB_PORT')),
  };
};

//TODO: Figure out false positive bug
export const executeCreateQuery = async (query: string): Promise<boolean> => {
  let errorOccurred = false;

  try {
    const client = new pg.Client(getPostgresConfig());
    await client.connect();

    client.query(query, async (err, res) => {
      await client.end();
      if (err) errorOccurred = true;
    });
  } catch (e) {
    console.log(e);
    errorOccurred = true;
  }

  return !errorOccurred;
};
