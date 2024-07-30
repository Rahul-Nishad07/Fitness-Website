import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Footer from '../components/Footer'



const URL_api1 = 'http://localhost:5164/getallworkouts';
const URL_api = 'http://localhost:5164/getallclass';
const URL_api2 = 'http://localhost:5164/getalltrainer';
const URL_api4 = 'http://localhost:5164/getallPackage';
const Home = () => {
  
    
  const [contact, setContact] = useState([]); // State variable to store jobs
  const [res, setRes] = useState([]); // State variable to store the value of res
  const [res1, setRes1] = useState([]); // State variable to store the value of res1
  const [res4, setRes4] = useState([]); // State variable to store the value of res4
  const [res2, setRes2] = useState([]); // State variable to store the value of res2
  const [formData, setFormData] = useState({
  
    firstname: '',
    lastname: '',
    emailid: '',
    phoneNo: '',
    dateofbirth: '',
    addresss: '',
    messages: ''
});

const navigate = useNavigate();


const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        eventID: "1001",
        addInfo: {
         
          fname: formData.firstname,
          lname: formData.lastname,
          email: formData.emailid,
          phone: formData.phoneNo,
          dateOfbirth: formData.dateofbirth,
          address: formData.addresss,
          message: formData.messages
            
            
        }
    };
    try {
        const response = await axios.post('http://localhost:5164/information', payload);
        let res = response.data.result.rData.rMessage;
        console.log(response.data, 'api response'); // handle response
        console.log(formData)
        // setShowPopup(true);
         // Show the popup after successful registration
         if(res=="Information Added"){

           alert(res);
          //  navigate('/login');
         }
        else{ 
          alert(res);
          // navigate('/register')

        }
    } catch (error) {
        console.error('Error signing up:', error);
        // Handle error
    }
};



const getData = () => {
  const payload = {
    "eventID": "1001",
    "addInfo":
    {

    }
    
  };

 
  //for all classesss............

  axios.post(URL_api, payload)
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
      console.log("Catch Block For Rahul classes ");
    });





    //for all workouts............

    axios.post(URL_api1, payload)
    .then(response => {
      // Handle successful response
      console.log("From Response Data ", response.data);
      setContact(response.data); // Assuming response.data is an array of jobs
      const resData = response.data.result.rData.rMessage;
      setRes1(resData); // Setting the value of res to the state variable
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching data:', error);
      console.log("Catch Block For Rahul workouts ");
    });



    //for all Packages..................


    axios.post(URL_api4, payload)
    .then(response => {
      // Handle successful response
      console.log("From Response Data ", response.data);
      setContact(response.data); // Assuming response.data is an array of jobs
      const resData = response.data.result.rData.rMessage;
      setRes4(resData); // Setting the value of res to the state variable
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching data:', error);
      console.log("Catch Block For Rahul workouts ");
    });



    //for all trainers


    
    axios.post(URL_api2 , payload)
    .then(response => {
      // Handle successful response
      console.log("From Response Data ", response.data);
      setContact(response.data); // Assuming response.data is an array of jobs
      const resData = response.data.result.rData.rMessage;
      setRes2(resData); // Setting the value of res to the state variable
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching data:', error);
      console.log("Catch Block For Rahul workouts ");
    });


  }

   

useEffect(() => {
  getData();
}, []);


const [searchQuery, setSearchQuery] = useState('');

const handleSearchInputChange = (event) => {
  setSearchQuery(event.target.value);
};

const handleSearchSubmit = (event) => {
  event.preventDefault();
  // Perform search logic here, such as navigating to a search results page
  console.log('Performing search with query:', searchQuery);
  // Clear the search input
  setSearchQuery('');
};


  return (
<>
  <div>
  <header className="header stricky">
    <div className="container">
      <div className="logo pull-left">
        <a >
          <img src="img/resources/fitlogo.png" alt="Awesome Image" />
        </a>
      </div>
      <div className="header-right pull-right">
       
        <nav className="mainmenu-holder">
          <div className="nav-header">
            <ul className="navigation">
              <li className="dropdown">
              <Link to="/">Home</Link>
                <ul className="submenu">
                
                </ul>
              </li>
              <li className="dropdown">
                <Link to="about">About Us</Link>
                <ul className="submenu">
                  <li><Link to="/trainer">Our Trainer</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="classes">Classes</Link>
                <ul className="submenu">
                
                  <li><Link to="/schedule">Class Schedule</Link></li>
                  <li><Link to="/classes">Class Details</Link></li>
                </ul>
              </li>
             
              <li>
              <Link to="contact">Contact</Link>
              </li>
              <li>
              <Link to="/login" ><h1 className='buttonforlogin'>LOGIN</h1></Link>
              </li>
              <li className="dropdown">
                <form className='searchbarheader' onSubmit={handleSearchSubmit}>
                <input id='idforsearchbar'
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                {/* <button type="submit"><i className="fa fa-search" /></button> */}
              </form>
              </li>
            </ul>
          </div>
          {/* <div className="nav-footer">
            <ul>
              <li>
                <button><i className="fa fa-search" /></button>
                <ul className="search-box">
                  <li>
                    <form action="#">
                      <input type="text" placeholder="Search for something..." />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </li>
                </ul>
              </li>
              <li><button className="menu-expander"><i className="fa fa-list-ul" /></button></li>
            </ul>
          </div> */}
        </nav>
      </div>
    </div>
    
  </header>

<div><img src="img/slider/1.jpg" alt width={1920} height={705} data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={1} />
</div>
  

   
   <section className="call-to-action">
    <div className="container">
      <div className="col-md-6">
        <div className="single-call-to-action left">
          <div className="title">
            <h3>Crossfit</h3>
            <h4>Extended your Strength</h4>
          </div>
          <p className='paragraphforcrossfithead'>You dream. You plan. You reach. There will be obstacles. <br />There will be doubters.There will be mistakes. But with hard work, with belief,<br /> with confidence and trust in yourself and those around you, there are no limits</p>
        </div>
      </div>
      <div className="col-md-6">
      {/* 'url(img/call-to-action/2.jpg) */}
        <div className="single-call-to-action right" >
          <div className="content">
            <div className="title">
              <h3>Train</h3>
              <h4>Personal Coach</h4>
            </div>
            <p>The last three or four reps is what makes the muscle grow. <br />This area of pain divides a champion from someone who is not a champion.”</p>
            
          </div>
        </div>
      </div>
    </div>
  </section> 
   <section className="featured-section section-padding">
    <div className="container">
      <div className="col-md-5">
        <div className="featured-title">
          <span>WorkOuts</span>
          <h2>Arms &amp; Soulder Workout</h2>
        </div>
        <p>An arms and shoulders workout typically includes exercises that target the muscles of the upper arms (biceps, triceps) and the shoulders (deltoids). </p>
        <a  className="read-more">see all workout</a>
        <div className="video-box">
          <img src="img/resources/video-box-bg.jpg" alt="Awesome Image" />
          <div className="overlay">
            <div className="box">
              <iframe width="450" height="300" src="https://www.youtube.com/embed/fYvtLAHT-cE?si=de1H2v_23sPimY2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video-fancybox"><img src="img/resources/video-play-btn.png" alt="Awesome Image" /></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="col-md-7">

      {res1.map((item1, index) => (
         <div className='row1'key={index}>
           {item1.map((value1, idx) => (
        <div className="single-featured-box" key={idx}>
      
          <div className="number-box">{value1[0]}</div>

            <div className="content-box">
            <div className="box">
              <h3>{value1[3]}</h3>
              <p>{value1[4]}</p>
              <div className="bottom-box">
                <ul>
                  <li>{value1[5]}</li>
                  {/* <li> <a data-toggle="modal" data-target=".booking-form">Join Now</a></li> */}
                  {/* <Link  to="/informations">join Now</Link> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src={value1[1]} alt="Awesome Image" />
          </div>
        </div>
             ))}
        </div>
          ))}
        </div>


        </div>
       </div>
      
       
  </section> 
   <section className="our-popular-post section-padding gray-bg">
    <div className="container">
      <div className="section-title text-center">
        <h2>
          <span>Our populer Classes</span>
        </h2>
        <p>That's great! Offering popular classes can attract a wide range of clients and enhance the overall experience at your gym. Here are some popular types of gym classes you might consider providing, along with brief descriptions and potential benefits:</p>
      </div>
      <div className="row">
    {res.map((item, index) => (
      <div className="classforindex" key={index}>
        {item.map((value, idx) => (
          <div className="single-popular-post mb-4" key={idx}>
            <div className="img-box">
              <img src={value[1]} className="img-fluid" />
              <div className="overlay">
                <div className="box">
                  <div className="bottom">
                    <h3>{value[4]}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box clearfix">
              <div className="title">
                <h3>{value[3]}</h3>
                <p>{value[5]}</p>
              </div>
            </div>
            <p>{value[6]}</p>
            <li><Link to={value[7]} className="read-more">Read More</Link></li>
            
          </div>
              ))}
        </div>
         ))}
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
   
   <section className="our-trainer section-padding our-trainer-page">
    <div className="container">
      <div className="section-title">
        <h2>
          <span>Our Best Trainer</span>
        </h2>
        <p>"Meet our award-winning gym trainers.Experience personalized coaching and exceptional results on your fitness journey with us."</p>	
      </div>
      <div className="row">
      {res2.map((item2, index) => (
        <div className="classforindex1" key={index}>
          {item2.map((value2, idx) => (
          <div className="single-trainer" key={idx}>
            <div className="img-box text-center">
              <img src={value2[1]} alt />
              <div className="content-box text-center">
                <h3>{value2[3]}</h3>
                <ul className="list-inline">
                <p>{value2[4]}</p>
                <p>{value2[5]}</p>
                </ul>
              </div>
            </div>	
         				
         </div>
      ))}
               </div>
                ))}	
      </div>
    </div>
  </section>



    <div className="modal contact-page fade booking-form" id="booking-form" tabIndex={-1} role="dialog" aria-labelledby="booking-form">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h3 className="main-title"><i className="flaticon-interface" />Join us Today!!! </h3>
            <form onSubmit={handleSubmit}  className="contact-form search-form-box">
              <h3 className="title"><i className="fa fa-user" />Basic Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="firstname"  value={formData.firstname} onChange={(e)=>setFormData({...formData,firstname:e.target.value})}  name="name" placeholder="Enter your First name*" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="lastname" value={formData.lastname} onChange={(e)=>setFormData({...formData,lastname:e.target.value})}  name="name" placeholder="Enter your Last name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="emailid" value={formData.emailid} onChange={(e)=>setFormData({...formData,emailid:e.target.value})}   name="email" placeholder="Enter your email*" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="phoneNo"   value={formData.phoneNo} onChange={(e)=>setFormData({...formData,phoneNo:e.target.value})}   name="phone" placeholder="Enter your phone" />
                  </div>
                </div>							
        
                <div className="col-md-6">
                  <div className="form-grp">
                    <input type="text" id="dateofbirth"   value={formData.dateofbirth} onChange={(e)=>setFormData({...formData,dateofbirth:e.target.value})}    placeholder="Enter your Date of Birth" className="date-picker" />
                  </div>
                </div>			
                <div className="clear" />							
              </div>
  
              <h3 className="title"><i className="fa fa-suitcase" />Personal Information</h3>								
              <div className="row">
                <div className="col-md-12">
                  <div className="form-grp">
                    <input type="text" id="addresss"   value={formData.addresss} onChange={(e)=>setFormData({...formData,addresss:e.target.value})}    placeholder="Enter Your Address" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-grp has-textarea">
                    <textarea id="messages" name="message"  value={formData.messages} onChange={(e)=>setFormData({...formData,messages:e.target.value})}  placeholder="Enter Your message" />
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

export default Home