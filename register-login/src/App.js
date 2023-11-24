import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registeredUser, setRegisteredUser] = useState(null);

  const validateRegistration = (event) => {
    event.preventDefault();

    console.log('Validating registration...');

    if (username.length < 3 || username.length > 15) {
      alert('Username must be between 3 and 15 characters');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (password.length < 8 || password.length > 20) {
      alert('Password must be between 8 and 20 characters');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    alert('Registration successful!');

    const userInfo = {
      username,
      email,
      password,
    };

    localStorage.setItem('registeredUser', JSON.stringify(userInfo));
    console.log('Registered User Information:', userInfo);
    setRegisteredUser(userInfo);
  };

  const validateLogin = (event) => {
    event.preventDefault();

    console.log('Validating login...');

    const storedUserInfo = localStorage.getItem('registeredUser');

    if (!storedUserInfo) {
      alert('No registered user found. Please register first.');
      return;
    }

    const userInfo = JSON.parse(storedUserInfo);

    if (loginEmail !== userInfo.email || loginPassword !== userInfo.password) {
      alert('Invalid email or password');
      return;
    }

    alert('Welcome ' + userInfo.username);
  };

  return (
    <div>
      <div className="container">
        <div className="form-box">
          <h2 id="register">Sign Up</h2>
          <hr className="line"/>
          <form id="registrationForm" onSubmit={validateRegistration}>
            <div className="input-container">
              <div className="input-label">
                <label htmlFor="username">Username</label>
              </div>

              <div className="input-field">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="email">Email</label>
              </div> 
            

              <div className="input-field">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="password">Password</label>
              </div>
              
              <div className="input-field">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>

            
            <div className="input-container">
              <div className="input-label">
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>

              <div className="input-field">
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>
            </div>
            
            <button className="button" type="submit">Sign Up</button>

            <p>Already have an account? <a href="#login" target="_self">Click here to Login</a></p>
          </form>
        </div>
      </div>
    
      <div className="container">
        <div className="form-box">
          <h2 id="login">Login</h2>
          <hr className="line"/>
          <form id="loginForm" onSubmit={validateLogin}>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="loginEmail">Email</label>
              </div>

              <div className="input-field">
                <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="loginPassword">Password</label>
              </div>

              <div className="input-field">
                <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
              </div>
            </div>

            <button className="button" type="submit">Login</button>
            <p>Don't have an account yet? <a href="#register" target="_self">Click here to Sign Up</a></p>
          </form>
        </div>
      </div>  
    </div> 
  );
}

export default App;
