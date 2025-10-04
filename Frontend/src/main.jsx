import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import keycloak from './auth/keycloak.js';

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (!authenticated) {
    console.log('User not authenticated!');
  } else {
    console.log('Authenticated:', keycloak.token);
    createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App keycloak={keycloak} />
      </React.StrictMode>
    );
  }
});
