import React from 'react';
import './login.css';
import abrehot from '../assets/Sculpture-at-Abrehot.jpg'
import logo from '../assets/logo.png'
function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-main">
        <div className="App-cover">
          <img src={abrehot} className="App-cover-image" alt="cover" />
        </div>
        <div className="App-login">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit" onClick={()=>{
                    event.preventDefault();
                    
            }}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
