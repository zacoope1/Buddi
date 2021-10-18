import React, { HTMLAttributes, useContext, useState } from 'react';
import { User } from '../Models/User/User';

type UserContextType = {
  readonly user: User | undefined;
  readonly isLoggedIn: boolean;
  performLogIn: () => void;
  performLogOut: () => void;
};

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>({
    firstName: 'Zac',
    lastName: 'Cooper',
    username: 'Zacer111',
    email: 'zacoope1@asu.edu',
    handle: 'Zacoope1',
    accountCreated: Date.now().toLocaleString('en-US'),
  });

  const performLogIn = () => {
    //Create Session and Cache
    setIsLoggedIn(true);
  };

  const performLogOut = () => {
    //TODO: Clear Cache
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, performLogIn, performLogOut }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be within the UserContextProvider');
  return context;
};
