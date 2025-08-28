// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import './index.css'; // You can remove this line if you don't have an index.css
import App from './app.jsx'; // This imports your main App component!
import reportWebVitals from './reportWebVitals'; // Optional: for performance metrics

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you don't care about web vitals, you can remove this part
reportWebVitals();