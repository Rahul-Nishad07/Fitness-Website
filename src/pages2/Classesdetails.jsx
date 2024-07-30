import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getallclass';
const DELETE_API = 'http://localhost:5164/delete_classes'; // Add the appropriate endpoint for delete
const Classesdetails = () => {
  const [contact, setContact] = useState([]);
  const [res, setRes] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    const payload = {
      "eventID": "1001",
      "addInfo": {
        "id":''
       
      }
    };
    axios.post(URL_api, payload)
      .then(response => {
        setContact(response.data);
        const resData = response.data.result.rData.rMessage;
        setRes(resData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const payload = {
        eventID: "1001",
        addInfo: {
          id: id
        }
      };
      const response = await axios.post(DELETE_API, payload);
      console.log(response.data); // Handle response as needed
      getData(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };


const handleId = (id) => {
  localStorage.setItem('id', id);
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
            <Link to='/adminlogin' onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/adminlogin';
            }}>
              <button className='logoutbutton'>LOG OUT</button>
            </Link>
          </li>
        </ul>
      </div>

      <div id="content">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className='searchbar'>
              <h2 className='headingsame'>CLASSES DETAILS</h2>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Duration</th>
                <th>Trainer</th>
                <th>Description</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {res.map((item, index) => (
                <React.Fragment key={index}>
                  {item.map((value, idx) => (
                    <tr style={{ cursor: 'pointer' }} key={idx}>
                      <td>{value[0]}</td>
                      <td><img src={value[1]}  style={{ width: '100px', height: 'auto' }} /></td>  
                      <td>{value[3]}</td>
                      <td>{value[4]}</td>
                      <td>{value[5]}</td>
                      <td>{value[6]}</td>
                      <td>{value[7]}</td>
                      <td>
                        <NavLink to="/edit_class">
                       <Button variant="primary" onClick={() => handleId(value[0])}>Update</Button></NavLink>
                        <Button variant="danger" onClick={() => handleDelete(value[0])}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Classesdetails;
