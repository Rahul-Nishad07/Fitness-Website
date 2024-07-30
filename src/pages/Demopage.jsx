import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const url_bodybuilding = 'http://localhost:5164/getallsingleclass';

const Demopage = () => {
  const [res, setRes] = useState([]);
  const { id } = useParams();
  const [formData, setFormData] = useState({

    firstname: '',
    lastname: '',
    emails: '',
    subjects: ''
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo:
      {

        fname: formData.firstname,
        lname: formData.lastname,
        email: formData.emails,
        subject: formData.subjects

      }
    };
    try {
      const response = await axios.post('http://localhost:5164/bodybuilding12', payload);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response
      console.log(formData)
      // setShowPopup(true);
      // Show the popup after successful registration
      if (res == "Thanks For The Subscribe Our Classes") {

        alert(res);
        //  navigate('/login');
      }
      else {
        alert(res);
        // navigate('/register')

      }
    } catch (error) {
      console.error('Error Subscription:', error);
      // Handle error
    }
  };

  const getData = ()=>{
   
     const payload = { 
       "eventID":"1001",
       "addInfo":{
         
       }
     }
  


  axios.post(url_bodybuilding, payload)
  .then(response => {
  
    console.log("From Response Data ", response.data);
    setContact(response.data); // Assuming response.data is an array of jobs
    const resData = response.data.result.rData.rMessage;
    console.log(resData ,'resData')
    setRes(resData); // Setting the value of res to the state variable
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
    console.log("Catch Block For Rahul classes ");
  });
  };

useEffect(()=>{
   getData();
},[]);


useEffect(() => {
  const fetchData = async () => {
    const payload = {
      "eventID": "1001",
      "addInfo": {
        "id": id
      }
    };
    try {
      const response = await axios.post('http://localhost:5164/getallsingleclass', payload);
      setClassData(response.data); // Assuming response.data contains class details
    } catch (error) {
      console.error('Error fetching class details:', error);
    }
  };
  fetchData();
}, [id]);


  return (
    <>
      <Header />

      <div>
        <section className="inner-banner">
          <div className="container">
            <div className="title pull-left">
              <h3>Bodybuilding</h3>
            </div>
            <div className="breadcumb pull-right">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/classes">Classes</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="our-popular-post section-padding popular-post-page single-class-content">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="single-popular-post">
            <div className="img-box">
              <img src="public/img/popular-class-page/crossfit.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>Duration - 50 Minutes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
              <h3>Bodybuilding</h3>
              <p>Alex</p>   
              </div>
            </div>
            <p>Bodybuilding involves weightlifting and nutrition to increase muscle size, strength, and definition, often for aesthetic purposes or competitive bodybuilding events.  </p>

            <div className="description-box">
              <h3 className="sub-title">Description</h3>
              <p>Bodybuilding is a discipline combining resistance training, nutrition, and dedication to sculpting and defining muscles. It emphasizes strength, size, and symmetry, often for aesthetic purposes or competitive bodybuilding events. Achieving success requires meticulous training, strategic nutrition, and unwavering commitment to a demanding lifestyle centered around physical development.  
              </p>
            </div>
            <div className="work-benifits">
              <h3 className="sub-title">Workout benefits</h3>
              <ul>
                <li><i className="fa fa-angle-right" /> Bodybuilding enhances cardiovascular health, reducing the risk of heart disease.</li>
                <li><i className="fa fa-angle-right" /> Mental well-being improves with stress reduction and increased confidence
                </li>
                <li><i className="fa fa-angle-right" /> Boosted metabolism aids weight management and promotes fat loss..</li>
                <li><i className="fa fa-angle-right" /> Functional strength gains lower injury risks in daily activities.</li>
              </ul>
            </div>
          </div>
        
        </div>
        <div className="col-md-4">
          <div className="single-sidebar-wrapper">
            <div className="single-sidebar subscribe-form">
            <form onSubmit={handleSubmit} >
                <h3 className="title text-center">Subcribe</h3>
                <div className="form-grp">
                  <input type="text" placeholder="First Name*"  id="firstname"  value={formData.firstname} onChange={(e)=>setFormData({...formData,firstname:e.target.value})} />									
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="Last Name" id="lastname"  value={formData.lastname} onChange={(e)=>setFormData({...formData,lastname:e.target.value})} />									
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="Email*"  id="emails"  value={formData.emails} onChange={(e)=>setFormData({...formData,emails:e.target.value})} />									
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="Subject" id="subjects"  value={formData.subjects} onChange={(e)=>setFormData({...formData,subjects:e.target.value})} />									
                </div>
                <span>* Required Field</span>
                <div className="form-grp">
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
            <div className="single-sidebar team-widget">
              <div className="sidebar-title">
                <h3>Trainer</h3>
              </div>
              <ul>
                <li>
                  <div className="img-box">
                    <img src="img/our-trainer/thumb-1.jpg" alt="Awesome Image" />
                  </div>
                  <div className="content-box">
                    <h4>Jacov Stain</h4>
                    <ul className="social list-inline">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="img-box">
                    <img src="img/our-trainer/thumb-2.jpg" alt="Awesome Image" />
                  </div>
                  <div className="content-box">
                    <h4>Under taker</h4>
                    <ul className="social list-inline">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="img-box">
                    <img src="img/our-trainer/thumb-3.jpg" alt="Awesome Image" />
                  </div>
                  <div className="content-box">
                    <h4>Roman Reign</h4>
                    <ul className="social list-inline">
                      <li><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        <section className="our-bmi">
          <div className="container">
            <div className="section-title">
              <h2>
                <span>Know your BMI</span>
              </h2>
            </div>
            <div className="clearfix">
              <form action="#" className="clearfix">
                <div className="form-grp">
                  <select name="gender" className="select-menu">
                    <option value>Gender</option>
                    <option value>Male</option>
                    <option value>Female</option>
                  </select>
                </div>
                <div className="form-grp">
                  <input type="text" id="weight" placeholder="Weight In KG" />
                </div>
                <div className="form-grp">
                  <input type="text" id="height" placeholder="Height In Inch" />
                </div>
                <div className="form-grp submit">
                  <button type="submit" id="calculate">calculator</button>
                </div>
                <span>=</span>
                <span className="result" id="result">00.0</span>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Demopage