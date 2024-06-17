import { useAuth } from '../AuthContext';
import React, { useState } from 'react';
import '../styles/Login.css'; // Import the CSS file

const Login = () => {


  const { user } = useAuth();
  const { token } = useAuth();
  const { login } = useAuth();
  const { logout } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    login( email , 'w2wddqwsdqwewqreqw');
  };

  const handleLogout = (event) => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
  

 
}
export default Login;