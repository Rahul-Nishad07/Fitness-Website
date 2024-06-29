import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const Karate = () => {
  const [formData, setFormData] = useState({
  
    firstname: '',
    lastname: '',
    emails: '',
    subjects:''
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
        const response = await axios.post('http://localhost:5164/fitness', payload);
        let res = response.data.result.rData.rMessage;
        console.log(response.data, 'api response'); // handle response
        console.log(formData)
        // setShowPopup(true);
         // Show the popup after successful registration
         if(res=="Thanks For The Subscribe Our Classes"){

           alert(res);
          //  navigate('/login');
         }
        else{ 
          alert(res);
          // navigate('/register')

        }
    } catch (error) {
        console.error('Error Subscription:', error);
        // Handle error
    }
};

  return (
  <>

  <Header />
<div>
  <header className="header stricky">
    <div className="container">
      <div className="logo pull-left">
        <Link to="/">
          <img src="img/resources/logo.png" alt="Awesome Image" />
        </Link>
      </div>
      <div className="header-right pull-right">
        <div className="top-info">
          <ul className="list-inline contact">
            <li><i className="flaticon-interface" /> fitbahubali@mail.com</li>
            <li><i className="flaticon-technology" /> <span>6261255992</span></li>
          </ul>
          <ul className="social list-inline">
            <li><a to="#"><i className="fa fa-facebook" /></a></li>
            <li><a to="#"><i className="fa fa-twitter" /></a></li>
            <li><a to="#"><i className="fa fa-google-plus" /></a></li>
            <li><a to="#"><i className="fa fa-pinterest" /></a></li>
          </ul>
        </div>
        <nav className="mainmenu-holder">
          <div className="nav-header">
            <ul className="navigation">
              <li className="dropdown">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown">
                <Link to="/about">About Us</Link>
                <ul className="submenu">
                  <li><Link to="/trainer">Our Trainer</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/classes">Classes</Link>
                <ul className="submenu">
                
                  <li><Link to="/schedule">Class Schedule</Link></li>
                  <li><Link to="/classes">Class Details</Link></li>
                </ul>
              </li>
             
              <li><a to="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="nav-footer">
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
          </div>
        </nav>
      </div>
    </div>
  </header>
  <section className="inner-banner">
    <div className="container">
      <div className="title pull-left">
        <h3>karate</h3>
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
              <img src="public/img/popular-class-page/martialartsiiiii.jpg" alt="Awesome Image" />
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
                <h3>Karate</h3>
                <p>Shang-Chi</p>
              </div>
            </div>
            <p>Karate is a Japanese martial art emphasizing striking techniques like punches, kicks, and blocks for self-defense and personal development.</p>
            <div className="description-box">
              <h3 className="sub-title">Description</h3>
              <p>Karate, a traditional Japanese martial art, emphasizes striking techniques such as punches, kicks, and blocks. Practiced for self-defense and personal development, it cultivates discipline, physical fitness, mental focus, and respect for oneself and others.</p>
            </div>
            <div className="work-benifits">
              <h3 className="sub-title">Workout benefits</h3>
              <ul>
                <li><i className="fa fa-angle-right" /> Physical Fitness: Karate improves strength, flexibility, balance, and cardiovascular health.</li>
                <li><i className="fa fa-angle-right" /> Self-Defense Skills: Enhances confidence, situational awareness, and personal safety knowledge.
                </li>
                <li><i className="fa fa-angle-right" /> MMental Discipline: Fosters focus, self-control, resilience, and emotional regulation abilities.</li>
                <li><i className="fa fa-angle-right" /> Character Development: Instills respect, discipline, humility, and perseverance in practitioners.</li>
              </ul>
            </div>
          </div>
          {/* <div class="related-popular-class">
						<h3 class="main-title">Releted Classes</h3>
						<div class="owl-carousel owl-theme">
							<div class="item">
								<div class="single-popular-post">
									<div class="img-box">
										<img src="img/popular-class/1.jpg" alt="Awesome Image"/>
										<div class="overlay">
											<div class="box">
												<div class="bottom">
													<h3>Duration - 50 Minutes</h3>
												</div>
											</div>
										</div>
									</div>
									<div class="title-box clearfix">
										<div class="title pull-left">
											<h3>BodyBuildin Program</h3>
											<p>Coach Shame Doe</p>
										</div>
										<div class="more-box pull-right">
											<a to="#">+</a>
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="single-popular-post">
									<div class="img-box">
										<img src="img/popular-class/2.jpg" alt="Awesome Image"/>
										<div class="overlay">
											<div class="box">
												<div class="bottom">
													<h3>Duration - 50 Minutes</h3>
												</div>
											</div>
										</div>
									</div>
									<div class="title-box clearfix">
										<div class="title pull-left">
											<h3>BodyBuildin Program</h3>
											<p>Coach Shame Doe</p>
										</div>
										<div class="more-box pull-right">
											<a to="#">+</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>					 */}
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
                  <button type="submit">Subcribe</button>
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
                      <li><a to="#"><i className="fa fa-facebook" /></a></li>
                      <li><a to="#"><i className="fa fa-twitter" /></a></li>
                      <li><a to="#"><i className="fa fa-google-plus" /></a></li>
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
                      <li><a to="#"><i className="fa fa-facebook" /></a></li>
                      <li><a to="#"><i className="fa fa-twitter" /></a></li>
                      <li><a to="#"><i className="fa fa-google-plus" /></a></li>
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
                      <li><a to="#"><i className="fa fa-facebook" /></a></li>
                      <li><a to="#"><i className="fa fa-twitter" /></a></li>
                      <li><a to="#"><i className="fa fa-google-plus" /></a></li>
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

export default Karate