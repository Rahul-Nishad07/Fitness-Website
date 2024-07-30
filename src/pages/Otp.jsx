


import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '/src/pages/register.css';


const Otp = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const payload = {
      eventID: "1001",
      addInfo: {
        EMAIL: email
      }
    };

    try {
      const response = await axios.post('http://localhost:5164/generate', payload);
      const res = response.data.result.rData.rMessage;

      if (res === 'OTP sent successfully') {
        alert(res);
        navigate('/forgotpassword');
      } else {
        alert(res || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP. Please try again.');
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Header />
      <div>
        <section className="inner-banner">
          <div className="container">
            <div className="title pull-left">
              <h3>Generate OTP</h3>
            </div>
          </div>
        </section>
        <div className="login-container1">
          <form className="login-form1" onSubmit={handleForgotPassword}>
            <h2>Generate OTP</h2>
            <div className="form-group1">
              <label htmlFor="email">Enter your email to receive OTP:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <button className="generateOTP"  type="submit">Generate OTP</button>
           <Link to='/forgotpassword'><p>verify OTP</p></Link> 
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Otp;
