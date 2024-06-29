import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


import '/src/pages/adminlogin.css'
import { Link } from 'react-router-dom';
// import Footer from '../components/Footer';

const AdminLogin = () => {



  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
    
      console.log('Token found in localStorage:', storedToken);
  
      setIsAdmin(true); 
    }
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setSuccess(false); 

    try {
      const apiUrl = 'http://localhost:5164/admin/login'; // API URL
      const response = await axios.post(apiUrl, { Username, Password });
      const { token } = response.data;

    
      localStorage.setItem('token', token);

    
      setSuccess(true);
      setIsAdmin(true); 
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('An error occurred. Please try again later.');
      }
      console.error('Login error:', err);
    }
  };

 
  if (isAdmin) {

    return <Navigate to='/admin'/>
  }

  return (
    <>
  
     
     <div className='adminloginheading'>
     {/* <img className='logo' src="img/resources/fitlogo.png" alt="Awesome Image" /> */}
      <h1 className='headingh1'>WELCOME TO THE ADMIN LOGIN PAGE</h1></div>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Login successful!</p>}
      <div className='containerfordiv'>
      
      <div className="login-container">
  
      
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdminLogin;
