import React from 'react'
import '/src/pages/payment.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const Payment = () => {
  return (
<>
<Header />
    <section class="inner-banner">
		<div class="containerx">
			<div class="title pull-left">
				
			</div>
			<div class="breadcumb pull-right">
				<ul>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/schedule">Schedule</Link></li>
				</ul>
			</div>
		</div>
	</section>
 {/* <section className='sectionform'>
  <div className='container2'>
         <div className='div1'>
            <div className="img-box">
              <img src="img/our-package/2.jpg" alt="Awesome Image" />
            </div>
            <div className="title-box clearfix">
              <div className="title pull-left">
                <h3 className='basicplan'>BASIC PLAN</h3>
               
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
   
</section> */}

<section className="p-4 p-md-5" >
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-lg-8 col-xl-5">
      <div className="card rounded-3">
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h3>Thanks For Selecting Our Plan</h3>
            {/* <h6>Payment</h6> */}
          </div>
          <form action>
           
            <p className="fw-bold mb-4">Add to Information</p>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="formControlLgXsd" className="form-control form-control-lg" placeholder="Name" />
              <label className="form-label" htmlFor="formControlLgXsd">Name</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="formControlLgXsd" className="form-control form-control-lg" placeholder="Contact No." />
              <label className="form-label" htmlFor="formControlLgXsd">Contact No.</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="formControlLgXsd" className="form-control form-control-lg" placeholder="Email" />
              <label className="form-label" htmlFor="formControlLgXsd">Email</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="formControlLgXsd" className="form-control form-control-lg" placeholder="Address" />
              <label className="form-label" htmlFor="formControlLgXsd">Address</label>
            </div>
            {/* <div className="row mb-4">
              <div className="col-7">
                <div data-mdb-input-init className="form-outline">
                  <input type="text" id="formControlLgXM" className="form-control form-control-lg" placeholder="**** **** **** ****" />
                  <label className="form-label" htmlFor="formControlLgXM">Card Number</label>
                </div>
              </div>
              <div className="col-3">
                <div data-mdb-input-init className="form-outline">
                  <input type="password" id="formControlLgExpk" className="form-control form-control-lg" placeholder="MM/YYYY" />
                  <label className="form-label" htmlFor="formControlLgExpk">Expire</label>
                </div>
              </div>
              <div className="col-2">
                <div data-mdb-input-init className="form-outline">
                  <input type="password" id="formControlLgcvv" className="form-control form-control-lg" placeholder="Cvv" />
                  <label className="form-label" htmlFor="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div> */}
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg btn-block">Add To Cart</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer  />
</>

  )
}

export default Payment