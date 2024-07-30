import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '/src/pages/admin.css';

const ClassesForm = () => {
  
  const [formData, setFormData] = useState({
    image: '',
    imagename:'',
    name: '',
    duration: '',
    trainer: '',
    description: '',
    link:''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result,
        imagename:file.name
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
        duration: formData.duration,
        trainer: formData.trainer,
        description: formData.description,
        link:formData.link
      }
    };
    try {
      const response = await axios.post('http://localhost:5164/classes', payload);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response
      if (res === "Class Details Added Successfully") {
        alert(res);
        // navigate('/login');
      } else {
        alert(res);
        // navigate('/register');
      }
    } catch (error) {
      console.error('Error Classes form:', error);
      // Handle error
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
          {/* <li><Link to="/information"><i className="zmdi zmdi-info-outline" /> INFORMATIONS</Link></li> */}
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
          <li><Link to="/paymentdetails"><i className="zmdi zmdi-settings" />PAYMENT DETAILS</Link></li>
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
              <h2 className='headingsame'>CLASSES FORM</h2>
              {/* <input className='searchbar1' placeholder="Search" /> */}
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="registration-form">
            <h2 className='classesform'>Classes Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} />
                {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration:</label>
                <input type="text" id="duration" name="duration" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="trainer">Trainer:</label>
                <input type="text" id="trainer" name="trainer" value={formData.trainer} onChange={(e) => setFormData({ ...formData, trainer: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="description">Link:</label>
                <textarea id="link" name="link" value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })}></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassesForm;
