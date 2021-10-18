export type NewUserRequest = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  handle: string;
};

export type User = {
  firstName: string;
  lastName: string;
  username: string;
  hash: string;
  salt: string;
  email: string;
  handle: string;
  accountCreated: string;
};
