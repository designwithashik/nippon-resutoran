import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const App = () => {
  const {user} =useContext(AuthContext)
  return (
    <div>
      <h2>Alhamdulillah</h2>
      <h3>{user}</h3>
    </div>
  );
};

export default App;