import { User } from '@firebase/auth';
import React, { Dispatch, HTMLAttributes, SetStateAction, useContext, useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../Services/FirebaseService';

type UserContextType = {
  readonly user: User | undefined;
  readonly isLoggedIn: boolean;
  performLogIn: (user: User, keepLoggedIn: boolean) => void;
  performLogOut: () => void;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const handleReload = (usr: User | undefined | null) => {
    if (usr) {
      setUser(usr);
      setIsLoggedIn(true);
    } else {
      localStorage.clear();
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(usr => {
      handleReload(usr);
    });

    return unsubscribe();
  }, []);

  const performLogIn = (user: User, keepLoggedIn: boolean) => {
    keepLoggedIn && localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
    //Create Session In Mongo
  };

  const performLogOut = async () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false);
      })
      .catch(() => {
        alert('Error! Could Not Log Out. Please Try Again!');
      });
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, performLogIn, performLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be within the UserContextProvider');
  return context;
};
