import React, { useState } from 'react';
import './Plogin.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit}>
        <h3>SIGN IN</h3>
        {/* <label htmlFor="username">Username</label> */}
        <input        
          type="text"
          id="username"
          name="username"
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="remember-me-container">
            <div className="remember-me-container-label">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
            </div>
            <div>
                <a href="#">SignUp</a>
            </div>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
