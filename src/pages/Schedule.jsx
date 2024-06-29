import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'



const Schedule = () => {
  return (
  <>
  <Header />
<section class="inner-banner">
		<div class="container">
			<div class="title pull-left">
				<h3>Schedule</h3>
			</div>
			<div class="breadcumb pull-right">
				<ul>
					<li className=''><Link to="/">HOME</Link></li>
				</ul>
			</div>
		</div>
	</section>

<section className="schedule">
  <div className="container schedule-box">
    <div className="time-table">
      <div className="table-row head">
        <div className="table-cell head-cell dark">TIME</div>
       
        <div className="table-cell head-cell">MONDAY</div>
        <div className="table-cell head-cell">TUESDAY</div>
        <div className="table-cell head-cell">WEDNESDAY</div>
        <div className="table-cell head-cell">THURSDAY</div>
        <div className="table-cell head-cell">FRIDAY</div>
        <div className="table-cell head-cell">SATURDAY</div>
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">07:00 AM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>CROSSFIT</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>FITNESS</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>KARATE</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>MARTIALARTS</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>YOGA</span></div><br />
        </div>

        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>BODYBUILDING</span></div><br />
        </div>

 
      </div>
      
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">10:00 AM</div>
       
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>CROSSFIT</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>BODYBUILDING</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>KARATE</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>MARTIAL ARTS</span></div><br />
        </div>

        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>FITNESS</span></div><br />
        </div>

       
        
      </div>
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">04:00 PM</div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-pink"><span>YOGA</span></div><br />
        </div>
       
       
        <div className="table-cell normal-cell">
          <div className="exercise bg-red"><span>MARTIAL ARTS</span></div><br />
        </div>
        
        <div className="table-cell normal-cell">
         
          <div className="exercise bg-red"><span>CROSSFIT</span></div><br />
        </div>
        

        <div className="table-cell normal-cell">
         
         <div className="exercise bg-red"><span>KARATE</span></div><br />
       </div>
       

       <div className="table-cell normal-cell">
         
         <div className="exercise bg-red"><span>FITNESS</span></div><br />
       </div>
       
       <div className="table-cell normal-cell">
         
         <div className="exercise bg-red"><span>BODYBUILDING</span></div><br />
       </div>
       

       
       
      </div>
      
      
      
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">06:00 PM</div>
        <div className="table-cell normal-cell">
         
          <div className="exercise bg-red"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          
        <div className="exercise bg-orange"><span>KARATE</span></div><br />
        </div>
        <div className="table-cell normal-cell">
       
          <div className="exercise bg-orange"><span>MARTIAL ARTS</span></div><br />
        </div>
        <div className="table-cell normal-cell">

          <div className="exercise bg-golden"><span>BODYBUILDING</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>KARATE</span></div><br />
         
        </div>
        <div className="table-cell normal-cell">
          
          <div className="exercise bg-red"><span>FITNESS</span></div><br />
        </div>
      
      </div>
      
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">07:00 PM</div>
        
        <div className="table-cell normal-cell">
          
          <div className="exercise bg-red"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-orange"><span>CROSSFIT</span></div><br />
          
        </div>
        <div className="table-cell normal-cell">
          
          <div className="exercise bg-red"><span>MARIAL ARTS</span></div><br />
        </div>
       

        <div className="table-cell normal-cell">
          
          <div className="exercise bg-red"><span>KARATE</span></div><br />
        </div>

        <div className="table-cell normal-cell">
          
          <div className="exercise bg-red"><span>FITNESS</span></div><br />
        </div>

        <div className="table-cell normal-cell">
          
          <div className="exercise bg-red"><span>BODYBUILDING</span></div><br />
        </div>

    
      </div>
      
      <div className="table-row normal-row">
        <div className="table-cell normal-cell dark">08:00 PM</div>
        <div className="table-cell normal-cell">
         
          <div className="exercise bg-red"><span>YOGA</span></div><br />
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-purple"><span>CROSSFIT</span></div><br />
        
        </div>
       
       
        <div className="table-cell normal-cell">
          <div className="exercise bg-golden"><span>BODYBUILDING</span></div><br />
          
        </div>

        <div className="table-cell normal-cell">
          <div className="exercise bg-purple"><span>KARATE</span></div><br />
        
        </div>
       
        <div className="table-cell normal-cell">
          <div className="exercise bg-purple"><span>MARTIAL ARTS</span></div><br />
        
        </div>
        <div className="table-cell normal-cell">
          <div className="exercise bg-purple"><span>BODYBUILDING</span></div><br />
        
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

  <Footer />
  </>

  )
}

export default Schedule