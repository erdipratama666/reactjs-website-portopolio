import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  process.env.NODE_ENV === 'development' ? (
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  ) : (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
);