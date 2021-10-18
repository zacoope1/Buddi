import { User } from '../../Models/User';

export const getUserString = (username: string) => {
  return `select u from users where u.username='${username}'`;
};

export const createUserString = (user: User) => {
  return `
    INSERT INTO users(username, firstName, lastName, hash, salt, email, handle)
    VALUES (
      '${user.username}', '${user.firstName}', '${user.lastName}', 
      '${user.hash}', '${user.salt}', '${user.email}', '${user.handle}'
    );
  `;
};
