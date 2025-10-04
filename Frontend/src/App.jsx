import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App({ keycloak }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Notes App</h1>
      <p>User: {keycloak.tokenParsed?.email}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 mt-4"
        onClick={() => keycloak.logout({ redirectUri: window.location.origin })}
      >
        Logout
      </button>
    </div>
  );
}

export default App;

