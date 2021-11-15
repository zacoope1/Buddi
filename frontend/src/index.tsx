import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from './Contexts/ThemeContext';
import './index.css';
import AppRouter from './Router';
import { checkConstants } from './Shared/Constants';

// window.onload = () => {
//   document.body.className += 'body-drop-in';
// };

checkConstants();

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppRouter />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
