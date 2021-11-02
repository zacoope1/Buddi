import { User } from '@firebase/auth';
import React, { HTMLAttributes, useContext, useState } from 'react';

type UserContextType = {
  readonly user: User | undefined;
  readonly isLoggedIn: boolean;
  performLogIn: (user: User) => void;
  performLogOut: () => void;
};

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const performLogIn = (user: User) => {
    setUser(user);
    setIsLoggedIn(true);
    //Create Session In Mongo
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
