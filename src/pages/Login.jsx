import React, { useState } from 'react';
import '../Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  }

  return (
    <div className="container">
      <h1>خوش آمدید</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">نام کاربری</label>
          <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
        </div>
        <div className="input-group">
          <label htmlFor="password">رمز عبور</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off'/>
        </div>
        <p><button className="login-button" type="submit"><a href='https://www.google.com'>ورود</a></button><a className='forget-password' href="/forgot-password">Forgot Password?</a></p>
        
      </form>
    </div>
  );
}

export default Login;
