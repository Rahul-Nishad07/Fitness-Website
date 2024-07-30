import React ,{useNavigate} from 'react'
import '/src/pages/admin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Singlepage = () => {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [duration, setContact] = useState('');
  const [trainer, setTrainer] = useState('');
  const [description, setDescription] = useState('');
  const [description2, setDescription2] = useState('');
  const [heading1, setHeading1] = useState('');
  const [heading2, setHeading2] = useState('');
  const [heading3, setHeading3] = useState('');
  const [heading4, setHeading4] = useState('');

  
  const [formData, setFormData] = useState({
  
    image: '',
    name: '',
    imagename: '',
    duration: '',
    trainer: '',
    description:'',
    description2: '',
    heading1: '',
    heading2:'',
    heading3:'',
    heading4:''
});
const [showPopup, setShowPopup] = useState(false);
// const navigate = useNavigate();


const handleImageChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setFormData({ ...formData, image: reader.result });
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
          name: formData.name,
          imagename: formData.imagename,
          duration: formData.duration,
          trainer: formData.trainer,
          description: formData.description,
          description2: formData.description2,
          heading1: formData.heading1,
          heading2:formData.heading2,
          heading3:formData.heading3,
          heading4:formData.heading4

            
            
        }
    };
    try {
        const response = await axios.post('http://localhost:5164/singleclass', payload);
        let res = response.data.result.rData.rMessage;
        console.log(response.data, 'api response'); // handle response
        // setShowPopup(true);
         // Show the popup after successful registration
         if(res=="Class Details Added Successfully"){

           alert(res);
          //  navigate('/login');
         }
        else{ 
          alert(res);
          // navigate('/register')

        }
    } catch (error) {
        console.error('Error Classes form:', error);
        // Handle error
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
    {/* Content */}
    <div id="content">
      <nav className="navbar navbar-default">
      <div className="container-fluid">
              <div className='searchbar'>
              <h2 className='headingsame'>SINGLE PAGE</h2>
              {/* <input className='searchbar1' placeholder="Search" /> */}
            </div>  
          </div>
      </nav>
      <div className="container-fluid">
      <div className="registration-form">
      <h2 className='classesform'>SINGLE PAGE</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />
          {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
          {/* value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} */}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" value={formData.duration} onChange={(e)=>setFormData({...formData,duration:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="trainer">Trainer:</label>
          <input type="text" id="trainer" name="trainer" value={formData.trainer} onChange={(e)=>setFormData({...formData,trainer:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description-2:</label>
          <textarea id="description2" name="description2" value={formData.description2} onChange={(e)=>setFormData({...formData,description2:e.target.value})}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="name">Heading-1</label>
          <input type="text" id="heading1" name="heading1" value={formData.heading1} onChange={(e)=>setFormData({...formData,heading1:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Heading-2:</label>
          <input type="text" id="heading2" name="heading2" value={formData.heading2} onChange={(e)=>setFormData({...formData,heading2:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Heading-3:</label>
          <input type="text" id="heading3" name="heading3" value={formData.heading3} onChange={(e)=>setFormData({...formData,heading3:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Heading-4:</label>
          <input type="text" id="heading4" name="heading4" value={formData.heading4} onChange={(e)=>setFormData({...formData,heading4:e.target.value})} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
    </div>
  </div>
  )
}

export default Singlepage
