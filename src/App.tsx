import React from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import UserAuth from './components/userAuth/UserAuth';
import Bank from './pages/bank/Bank';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>#5 useReducer</h2>
        <Bank />
      </div>
    </AuthProvider>
  );
}

export default App;
