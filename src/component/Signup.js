import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful!');
        // Optionally redirect to login page
      } else {
        alert(data.message || 'Signup failed.');
      }
    } catch (err) {
      alert('Error connecting to the server.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-wrapper">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" placeholder="Enter your username" required onChange={handleChange} />

            <label>Password:</label>
            <input type="password" name="password" placeholder="Create a password" required onChange={handleChange} />

            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required onChange={handleChange} />

            <label>Address:</label>
            <input type="text" name="address" placeholder="Enter your address" required onChange={handleChange} />

            <label>Phone Number:</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required onChange={handleChange} />

            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
