import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the username and password match your predefined values
    if (username === 'admin' && password === 'P@tR0g3rs') {
      setAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
    setUsername('')
  };

  if (authenticated) {
    return (
      <div>
        <Navbar />
        <h1>Welcome Mr Patt Rogers</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
        <>
        <Navbar />
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      </>
    );
  }
}

export default Admin;
