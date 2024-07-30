import React from 'react';
import { Link } from 'react-router-dom';
import '/src/pages/admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  return (
    <div id="viewport">
      {/* Sidebar */}
      <div id="sidebar">
        <header>
          <img src="img/resources/fitlogo.png" alt="Awesome Image" />
        </header>
        <ul className="nav">
        {/* <li><Link to="/admin"><i className="zmdi zmdi-view-dashboard" /> PROFILE</Link></li> */}
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
          {/* <li><Link to="/demo"><i className="zmdi zmdi-settings" />Demo</Link></li> */}
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
            <div className="searchbar">
              <h2 className="headingsame">PROFILE</h2>
              {/* <input className="searchbar1" placeholder="Search" /> */}
            </div>
          </div>
        </nav>
        <div className="admincenter">
          <h1>Welcome to the Admin</h1>
          <p>
            Welcome to FITBAHUBALI, where fitness meets inspiration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

// .registration-form {
//   max-width: 90%;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #f9f9f9;
// }

// .form-group {
//   margin-bottom: 20px;
// }

// label {
//   display: block;
//   margin-bottom: 5px;
//   font-weight: 100;
// }

// input[type="text"],
// textarea {
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-sizing: border-box;
// }

// button[type="submit"] {
//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   background-color: #007bff;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;
// }

// button[type="submit"]:hover {
//   background-color: #0056b3;
// }


// .classesform{
//    font-weight: 900;
// }


