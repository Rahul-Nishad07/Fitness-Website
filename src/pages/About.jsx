import React , {useState,useEffect} from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'



const URL_api4 = 'http://localhost:5164/getallPackage';
const About = () => {

  const [contact, setContact] = useState([]); // State variable to store jobs
    const [res4, setRes] = useState([]); // State variable to store the value of res
  
    const getData = () => {
      const payload = {
        "eventID": "1001",
        "addInfo":
        {
  
        }
      };
      axios.post(URL_api4, payload)
        .then(response => {
          // Handle successful response
          console.log("From Response Data ", response.data);
          setContact(response.data); // Assuming response.data is an array of jobs
          const resData = response.data.result.rData.rMessage;
          console.log(resData ,'resData')
          setRes(resData); // Setting the value of res to the state variable
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching data:', error);
          console.log("Catch Block For Rahul ");
        });
    }
  
    useEffect(() => {
      getData();
    }, []);
  return (
<>
     <Header /> 
  <div>
  <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>About us</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
       
          <li><Link className='linktag' to="/about">About Us</Link></li> 
          <li><Link className='linktag' to="/adminlogin">Admin</Link></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="about-content-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="video-box">
            <img src="" alt="Awesome Image" />
            <div className="overlay">
              <div className="box">
                <iframe  width="560" height="270" src="https://www.youtube.com/embed/y9rb7OBi9iE?si=8HUh0DKTSJaSE_EQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video-fancybox"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-content-text">
            <h3>Who We are</h3>
            <p>Welcome to FITBAHUBALI, where fitness meets inspiration! At FITBAHUBALI, we're not just a gym; we're a community dedicated to helping you reach your health and wellness goals. With state-of-the-art facilities, expert trainers, and a diverse range of classes and programs, we're here to support you every step of the way on your fitness journey.</p>
          </div>
        </div>
      </div>
      <div className="about-call-to-action">
        <div className="row">
          <div className="col-md-4">
            <div className="single-top-call-to-action">
              <div className="icon-box">
                <i className="flaticon-people" />
              </div>
              <div className="text-box">								
                <h3>01. Pick Your Trainer</h3>
                <p>Meet our exceptional team: dedicated, passionate.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-top-call-to-action">
              <div className="icon-box">
                <i className="flaticon-gym" />
              </div>
              <div className="text-box">								
                <h3>02. Pick Your Workout</h3>
                <p>Choose your path to fitness</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-top-call-to-action no-divider">
              <div className="icon-box">
                <i className="flaticon-exercise" />
              </div>
              <div className="text-box">								
                <h3>03. Start Gym</h3>
                <p>Begin your fitness journey today. Unlock your potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="our-packages section-padding">


    <div className="container">
      <div className="section-title text-center">
        <h2>
          <span>Our Packages</span>
        </h2>
        <p>That sounds like a great way to offer your clients options tailored to their fitness needs! What kind of packages are you considering?</p>
      </div>

   <div className="container">
      <div className="row">
      {res4.map((item, index) => (
        <div className="classforindex3" key={index}>
           {item.map((value4, idx) => (
          <div className="single-our-package" key={idx}>
            <div className="img-box">
              <img src={value4[1]} alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <Link to="/payment"><h3>{value4[3]}</h3></Link>
                <span>{value4[4]}</span>
              </div>
              <div className="price-box pull-right">
                <span>{value4[5]}</span>
              </div>
            </div>
            <div className="list-box">
              <ul>
                <li><i className="fa fa-check" />{value4[6]}</li>
                <li><i className="fa fa-check" />{value4[7]}</li>
                <li><i className="fa fa-check" /> {value4[8]}</li>
                <li><i className="fa fa-check" /> {value4[9]}</li>
              </ul>
            </div>
            <div className="button-box clearfix">
            
              <Link to="/payment" className="thm-btn">Choose Plan</Link>
            </div>
          </div>
          ))}
        </div>
          ))}
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
  <div className="modal contact-page fade booking-form" id="booking-form" tabIndex={-1} role="dialog" aria-labelledby="booking-form">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h3 className="main-title"><i className="flaticon-interface" />Join us Today!!! </h3>
          <form className="contact-form search-form-box" action="">
            <h3 className="title"><i className="fa fa-user" />Basic Information</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="name" placeholder="Enter your First name*" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="name" placeholder="Enter your Last name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="email" placeholder="Enter your email*" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your phone" />
                </div>
              </div>							
              <div className="col-md-6">
                <div className="form-grp">
                  <select className="select-menu">
                    <option value="#">Gender</option>
                    <option value="#">Male</option>
                    <option value="#">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" placeholder="Enter your Date of Birth" className="date-picker" />
                </div>
              </div>			
              <div className="clear" />							
            </div>
            <h3 className="title"><i className="fa fa-male" />Physical Information</h3>								
            <div className="row">								
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your Weight In KG" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your height In Inch" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <select className="select-menu">
                    <option value="#">Course Name</option>
                    <option value="#">Course Name</option>
                    <option value="#">Course Name</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-grp">
                  <input type="text" name="phone" placeholder="Enter your Age" />
                </div>
              </div>
            </div>
            <h3 className="title"><i className="fa fa-suitcase" />Personal Information</h3>								
            <div className="row">
              <div className="col-md-12">
                <div className="form-grp">
                  <input type="text" placeholder="Enter Your Address" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-grp has-textarea">
                  <textarea name="message" placeholder="Enter Your message" defaultValue={""} />
                </div>
                <button type="submit" className="pull-right thm-btn">JOIN US</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>









<Footer />

    </>
  )
}

export default About