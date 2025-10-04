import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',      
  realm: 'notes-app',                 
  clientId: 'notes-app',
});

export default keycloak;
