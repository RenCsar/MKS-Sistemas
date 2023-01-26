import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/utils/global.css';
import reportWebVitals from './reportWebVitals';
import Router from './utils/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();