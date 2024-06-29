import React from 'react'
import '/src/pages/payment.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


const Plan2 = () => {
  return (
    <>

    <Header/>
    <section class="inner-banner">
		<div class="containerx">
			<div class="title pull-left">
				
			</div>
			<div class="breadcumb pull-right">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/schedule">Schedule</Link></li>
				</ul>
			</div>
		</div>
	</section>
 <section className='sectionform'>
  <div className='container2'>
         <div className='div1'>
            <div className="img-box">
              <img src="img/our-package/2.jpg" alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <h3 className='basicplan'>PREMIUM PLAN</h3>
                
              </div>
             
            </div>
            <div className="week">
              <p>6 Days a Week</p>
              <p>Dedicated Trainer Alocated</p>
              <p>Diet Plan Included</p>
              <p>Morning Evening Batches</p>
            </div> 
          </div> 

     <div className='container1'>  
      
        <form className="form">
                  <div className="row1">
                    <div className="col-12">
                      <div className="form__div">
                        <input type="text" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">Card Number</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__div">
                        <input type="text" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">MM / yy</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__div">
                        <input type="password" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">Cvv code</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form__div">
                        <input type="text" className="form-control" placeholder=" " />
                        <label htmlFor className="form__label">Name on the card</label>
                      </div>
                    </div>
                    <div className="payment1">
                      <button className="pay">Pay<span>$100</span></button>
                    </div>
                  </div>
                </form>
                <img className='cardsclass'  src='public/img/payment/mastercard-removebg-preview.png'></img>
                <img  className='cardsclass' src='public/img/payment/upi-removebg-preview.png'></img>
                <img  className='cardsclass'  src='public/img/payment/visa-removebg-preview.png'></img>
                <img></img>
    </div>
   
  </div>
   
</section>

<Footer />
</>
  )
}

export default Plan2