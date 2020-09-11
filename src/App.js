import React, { useState } from 'react';
import Routes from './routes/routes';
import AuthContext from "./context/authContext";

function App() {
  const hasAuthToken = () => {
    return !!localStorage.getItem("user_auth_data");
  }
  const [authStatus, setAuthStatus] = useState(hasAuthToken());
  const login = () => {
    setAuthStatus(hasAuthToken());
  };

  return (
    <div>
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <Routes />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
