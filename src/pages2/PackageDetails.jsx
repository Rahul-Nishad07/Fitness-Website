import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const URL_api = "http://localhost:5164/getallPackage"
const DELETE_API ="http://localhost:5164/delete_package"
const PackageDetails = () => {

  const [contact, setContact] = useState([]); // State variable to store jobs
  const [res, setRes] = useState([]); // State variable to store the value of res
  // const navigate = useNavigate();

  const getData = () => {
    const payload = {
      "eventID": "1001",
      "addInfo":
      {
        "id":'id'
      }
    };
    axios.post(URL_api, payload)
      .then(response => {
        // Handle successful response
        console.log("From Response Data ", response.data);
        setContact(response.data); // Assuming response.data is an array of jobs
        const resData = response.data.result.rData.rMessage;
        setRes(resData); // Setting the value of res to the state variable
      })
      .catch(error => {
        // Handle error
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


 const handleId = (id) =>{
   localStorage.setItem('id',id);
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
              <h2 className='headingsame'>PACKAGE DETAILS</h2>
            </div>  
          </div>
        </nav>
        <div className="container-fluid">
          <Table>

           <table className='table table-bordered table-hover table-striped'>
           <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Trainers</th>
                <th>Price</th>
                <th>Heading 1</th>
                <th>Heading 2</th>
                <th>Heading 3</th>
                <th>Heading 4</th>
              </tr>
            </thead>

            <tbody>
              {res.map((item, index) => (
                <React.Fragment key={index}>
                  {item.map((value, idx) => (
                    <tr style={{ cursor: 'pointer' }} key={idx}>
                      <td>{value[0]}</td>
                      <td>{value[2]}</td> 
                      <td>{value[3]}</td>
                      <td>{value[4]}</td> 
                      <td>{value[5]}</td>
                      <td>{value[6]}</td>
                      <td>{value[7]}</td>
                      <td>{value[8]}</td>
                      <td>{value[9]}</td>
                      <td>
                        <NavLink to="/edit_package">
                       <Button variant="primary" onClick={() => handleId(value[0])}>Update</Button></NavLink>
                        <Button variant="danger" onClick={() => handleDelete(value[0])}>Delete</Button>
                      </td>
                     

                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
           </table>

          </Table>
        </div>
      </div>
    </div>
  )
}

export default PackageDetails


