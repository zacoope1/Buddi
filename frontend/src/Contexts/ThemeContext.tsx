import React, { HTMLAttributes, useContext, useEffect, useState } from 'react';
import { DarkTheme, LightTheme, Theme } from '../Components/Theme/Themes';

type ThemeMode = 'DARK' | 'LIGHT';

type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  theme: Theme;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('DARK');
  const [theme, setTheme] = useState<Theme>(DarkTheme);

  useEffect(() => {
    setTheme(themeMode === 'DARK' ? DarkTheme : LightTheme);
  }, [themeMode, theme]);

  return <ThemeContext.Provider value={{ themeMode, setThemeMode, theme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be within ThemeContextProvider');
  return context;
};
