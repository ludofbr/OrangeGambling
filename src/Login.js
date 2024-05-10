import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from './routes';

function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const login = () => {
    window.user = {
      isConnect: true,
      id: 0,
      username: username
    };
    navigate(ROUTES.HOME);
  };

  return (
    <section className="login-box">
      <h1>Login</h1>
      <div>
        <label for="user-name">Username:</label>
        <input type="text" className="user-name" name="user-name" value={username} onChange={e => setUsername(e.target.value)}/>

        {/* <label for="email">Email:</label>
        <input type="email" className="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>

        <label htmlFor="password">Password:</label>
        <input type="password" className="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/> */}

        <button onClick={login}>Go</button>
      </div>
    </section>
  );
}

export default App;
