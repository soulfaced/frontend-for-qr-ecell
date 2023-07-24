// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// Set the base URL for Axios requests to your backend server
axios.defaults.baseURL = 'http://localhost:5000'; // Replace with your backend server URL

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
