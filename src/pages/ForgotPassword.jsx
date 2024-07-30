
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleOtpVerification = async () => {
    try {
      // Check if email and OTP are entered
      if (!email || !otp) {
        alert('Please enter email and OTP.');
        return;
      }
  
      // Prepare payload for OTP verification
      const payload = {
        eventID: "1001",
        addInfo: {
          EMAIL: email,
          OTP: otp
        }
      };
  
      console.log('Verification Payload:', payload);
  
      // Send POST request to verify OTP
      const response = await axios.post('http://localhost:5164/verify', payload);
      const { data } = response;
  
      console.log('Verification Response:', data);
  
      // Check if data contains expected fields
      if (data && data.result && data.result.rData && data.result.rData.message === 'OTP verified successfully') {
        alert('OTP verified successfully.');
        // Proceed to update password UI or navigate to update password page
        navigate('/updatepassword');
      } else {
        // Handle case where OTP verification fails
        alert(data.result.rData.message || 'Failed to verify OTP.');
      }
    } catch (error) {
      // Handle errors during OTP verification
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP. Please try again.');
    }
  };
  

  
  

  const handlePasswordUpdate = async () => {
    try {
      if (newPassword !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      const updatePayload = {
        eventID: "1001",
        addInfo: {
          EMAIL: email,
          PASSWORD: newPassword
        }
      };

      console.log('Update Payload:', updatePayload);

      const response = await axios.post('http://localhost:5164/updatepassword', updatePayload);
      const { data } = response;

      console.log('Update Response:', data);
     
      if (data) {
        alert('Password updated successfully!');
        navigate('/login');
      } else {
        alert(data.resData.rData.message);
      }

    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password. Please try again.');
    }
  };

  return (
    <>
      <Header />

      <div>
        <section className="inner-banner">
          <div className="container">
            <div className="title pull-left">
              <h3>Verify OTP and Set New Password</h3>
            </div>
          </div>
        </section>
        <div className="login-container1">
          <form className="login-form1">
            <div className="form-group1">
              <label htmlFor="email">Enter Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="otp">Enter Received OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button  className="buttonforverify"   type="button" onClick={handleOtpVerification}>Verify OTP</button>
            <button  className="buttonforverify" type="button" onClick={handlePasswordUpdate}>Update Password</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;
