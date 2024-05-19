// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Imports the global stylesheet
import App from './App';
import AppRouter from './router';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
