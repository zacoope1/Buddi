import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from './Contexts/ThemeContext';
import './index.css';
import AppRouter from './Router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppRouter />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
