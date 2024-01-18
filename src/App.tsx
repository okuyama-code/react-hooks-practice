import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import UserAuth from './components/userAuth/UserAuth';

function App() {
  return (
    // AuthProviderを一番外側に置く
    <AuthProvider>
      <div className="App">
        <h2>#4 useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  );
}

export default App;
