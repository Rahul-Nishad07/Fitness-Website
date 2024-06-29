import React from 'react'
import '/src/pages/admin.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import { useState, useEffect } from 'react'


const Trainers = () => {

  const [ image,setImage] = useState('');
  const [ imagename,setImagename] = useState('');
  const [name, setName] = useState('');
  const [experience, setexperience] = useState('');
  const [trainer, setTrainer] = useState('');
  const [work, setWork] = useState('');



    const [formData, setFormData] = useState({
        image: '',
        imagename:'',
        name: '',
        experience: '',
        trainer: '',
        work: ''
      });

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result ,
            imagename:file.name});
          
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    

      const [showPopup, setShowPopup] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            eventID: "1001",
            addInfo: {
             
              image: formData.image,
              imagename:formData.imagename,
              name: formData.name,
              experience: formData.experience,
              trainer: formData.trainer,
              work: formData.work
                
                
            }
        };
        try {
          const response = await axios.post('http://localhost:5164/trainers', payload);
          let res = response.data.result.rData.rMessage;
          console.log(response.data, 'api response'); // handle response
          // setShowPopup(true);
           // Show the popup after successful registration
           if(res=="Trainres Details Added Successfully"){
  
             alert(res);
            //  navigate('/login');
           }
          else{ 
            alert(res);
            // navigate('/register')
  
          }
      } catch (error) {
          console.error('Error Trainers form:', error);
        
      }
  };

      
  return (
    <div id="viewport">
  {/* Sidebar */}
  <div id="sidebar">
    <header>
    <img src="img/resources/fitlogo.png" alt="Awesome Image" />
      {/* <a href="#">Fit Bahubali</a> */}
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
  {/* Content */}
  <div id="content">
    <nav className="navbar navbar-default">
    <div className="container-fluid">
              <div className='searchbar'>
              <h2 className='headingsame'>TRAINERS</h2>
              {/* <input className='searchbar1' placeholder="Search" /> */}
            </div>  
          </div>
    </nav>
    <div className="container-fluid">
    <div className="registration-form">
      <h2 className='classesform'>TRAINERS FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />
          {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input type="text" id="experience" name="experience" value={formData.experience} onChange={(e)=>setFormData({...formData,experience:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="work">Work</label>
          <input type="text" id="work" name="work" value={formData.work} onChange={(e)=>setFormData({...formData,work:e.target.value})} />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
    </div>
  </div>
  )
}

export default Trainers