import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'


const Trainer = () => {

  const URL_api = 'http://localhost:5164/getalltrainer';

    const [contact, setContact] = useState([]); // State variable to store jobs
    const [res, setRes] = useState([]); // State variable to store the value of res
  
    const getData = () => {
      const payload = {
        "eventID": "1001",
        "addInfo":
        {
  
        }
      };
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
        <h3>Our Trainer</h3>
      </div>
      <div className="breadcumb pull-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trainer">Our Trainer</Link></li>
        </ul>
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
      <div className="container">
      <div className="container1">
      <div className="row">
          {res.map((item, index) => (
        <div className="classforindex1" key={index}>
          {item.map((value2, idx) => (
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

export default Trainer