import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '/src/pages/register.css';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const Login = () => {
  
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');


  const [formData, setFormData] = useState({

    password: '',
    email: ''
   
});
const [showPopup, setShowPopup] = useState(false);



const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        eventID: "1001",
        addInfo: {
         
            PASSWORD: formData.password,
            EMAIL: formData.email,
           
            
            
        }
    };
    try {
        const response = await axios.post('http://localhost:5164/loginnew', payload);
        let res = response.data.result.rData.rMessage;
        console.log(response.data, 'api response'); // handle response
        // setShowPopup(true);
         // Show the popup after successful registration
         if(res=="Login Successful"){

           alert(res);
           navigate('/');
         }
        else{ 
          alert(res);
          navigate('/login')

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
        <h3>Login</h3>
      </div>
      {/* <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">HOME</Link></li>  
        </ul>
      </div> */}
    </div>
  </section>
  <div className="login-container1">
      <form className="login-form1" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
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
        {/* <button type="submit" onClick={GetLoginDetails }>Login</button> */}

        <button type="submit">Login</button>

        <div className='haveanyaccount'> <h5 >If You Don't Have Any Account</h5>
        <Link to="/register">Register</Link></div>
       
      </form>
    </div>
  </div>

  <Footer />
  </>
  )
}

export default Login