import React, { HTMLAttributes, useContext, useState } from 'react';

type ThemeMode = 'DARK' | 'LIGHT';

type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('DARK');
  return <ThemeContext.Provider value={{ themeMode, setThemeMode }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be within ThemeContextProvider');
  return context;
};
