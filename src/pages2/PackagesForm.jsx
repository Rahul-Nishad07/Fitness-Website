import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '/src/pages/admin.css';

const PackagesForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    imagename:'',
    name: '',
    trainer: '',
    price: '',
    heading1: '',
    heading2: '',
    heading3: '',
    heading4: ''
    
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result,
         imagename: file.name
       });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        image: formData.image,
        imagename: formData.imagename,
        name: formData.name,
        trainer: formData.trainer,
        price: formData.price,
        heading1: formData.heading1,
        heading2: formData.heading2,
        heading3: formData.heading3,
        heading4: formData.heading4
       

      }
    };
    try {
      const response = await axios.post('http://localhost:5164/plans', payload);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response
      if (res === "Package Added Successfully") {
        alert(res);
        navigate('/packagedetails');
      } else {
        alert(res);
        // navigate('/register');
      }
    } catch (error) {
      console.error('Error Package form:', error);
    
    }
  };

  return (
    <div id="viewport">
      <div id="sidebar">
        <header>
          <img src="img/resources/fitlogo.png" alt="Awesome Image" />
        </header>
        <ul className="nav">
        <li><Link to="/admin"><i className="zmdi zmdi-view-dashboard" /> PROFILE</Link></li>
          <li><Link to="/usersdetails"><i className="zmdi zmdi-link" /> USERS DETAILS</Link></li>
          <li><Link to="/request"><i className="zmdi zmdi-calendar" /> REQUESTS </Link></li>
          <li><Link to="/information"><i className="zmdi zmdi-info-outline" /> INFORMATIONS</Link></li>
          <li><Link to="/subscribers"><i className="zmdi zmdi-settings" /> SUBSCRIBERS</Link></li>
          <li><Link to="/classesform"><i className="zmdi zmdi-settings" /> CLASSES FORM</Link></li>
          <li><Link to="/classesdetails"><i className="zmdi zmdi-widgets" /> CLASSES DETAILS</Link></li>
          <li><Link to="/trainersform"><i className="zmdi zmdi-settings" /> TRAINERS FORM</Link></li>
          <li><Link to="/trainerDetails"><i className="zmdi zmdi-settings" /> TRAINERS DETAILS </Link></li>
          <li><Link to="/workouts"><i className="zmdi zmdi-settings" /> WORKOUTS </Link></li>
          <li><Link to="/workoutdetails"><i className="zmdi zmdi-settings" /> WORKOUT DETAILS </Link></li>
          <li><Link to="/packagesform"><i className="zmdi zmdi-settings" />PACKAGES FORM</Link></li>
          <li><Link to="/packagedetails"><i className="zmdi zmdi-settings" />PACKAGE DETAILS</Link></li>
          <li><Link to="/singlepage"><i className="zmdi zmdi-settings" />SINGLE PAGE</Link></li>
          <li><Link to="/singlepagedetails"><i className="zmdi zmdi-settings" />SINGLE PAGE DETAILS</Link></li>
    
          <li>
            <Link  to='/adminlogin' onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/adminlogin';
            }}>
              <button className='logoutbutton'>LOGOUT</button>
            </Link>
          </li>
          

        </ul>
        
      </div>
      <div id="content">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className='searchbar'>
              <h2 className='headingsame'>PACKAGE FORM</h2>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="registration-form">
            <h2 className='classesform'>PACKAGES FORM</h2>
            <form onSubmit={handleSubmit}>
             
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="trainer">Trainer Name:</label>
                <input type="text" id="trainer" name="trainer" value={formData.trainer} onChange={(e) => setFormData({ ...formData, trainer: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="heading1">Heading 1:</label>
                <textarea id="heading1" name="heading1" value={formData.heading1} onChange={(e) => setFormData({ ...formData, heading1: e.target.value })}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="heading2">Heading 2:</label>
                <textarea id="heading2" name="heading2" value={formData.heading2} onChange={(e) => setFormData({ ...formData, heading2: e.target.value })}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="heading3">Heading 3:</label>
                <textarea id="heading3" name="heading3" value={formData.heading3} onChange={(e) => setFormData({ ...formData, heading3: e.target.value })}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="heading4">Heading 4:</label>
                <textarea id="heading4" name="heading4" value={formData.heading4} onChange={(e) => setFormData({ ...formData, heading4: e.target.value })}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} />
               
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesForm;
