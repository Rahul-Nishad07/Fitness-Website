
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'
import '/src/pages/register.css';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


const Register = () => {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
    const [formData, setFormData] = useState({
    
      email: '',
      contact: '',
      password: '',
      username: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = {
          eventID: "1001",
          addInfo: {
           
              EMAIL: formData.email,
              MOBILE_NO: formData.contact,
              PASSWORD: formData.password,
              USERNAME: formData.username
              
              
          }
      };
      try {
          const response = await axios.post('http://localhost:5164/registrationpage', payload);
         
          let res = response.data.result.rData.rMessage;
          console.log(response.data, 'api response'); // handle response
        
           if(res=="Registration Successful"){

            alert(res);
            navigate('/login')
           }
          else{ 
            alert(res);
            navigate('/register')

          }
      } catch (error) {
          console.error('Error signing up:', error);
          // Handle error
      }
  };
  return (

    <>
    <Header />
   
    <div> <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>Register</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          
        </ul>
      </div>
    </div>
  </section>
  <div className="login-container1">
      <form className="login-form1" onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <div className="form-group1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})}
          
            required
          />

        </div>
        <div className="form-group1">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            value={formData.contact} onChange={(e)=>setFormData({...formData,contact:e.target.value})}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className='alreadyaccount'>
      <h5>If You have Already Account</h5>
      <Link to="/login"><h5 id="log">Login</h5></Link>
      </div>
      </form>
    </div>
    </div>

    <Footer /></>
  )
}

export default Register