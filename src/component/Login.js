import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Login.css'; // optional styling

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
          <p>
            New user? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
