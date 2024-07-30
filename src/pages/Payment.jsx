import React, { useState } from 'react';
import '/src/pages/payment.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    cardname: '',
    cardnumber: '',
    expMonth: '',
    expyear: '',
    cvv: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        contact: formData.contact,
        cardname: formData.cardname,
        cardnumber: formData.cardnumber,
        expMonth: formData.expMonth,
        expyear: formData.expyear,
        cvv: formData.cvv
      }
    };
    try {
      const response = await axios.post('http://localhost:5164/basicplan', payload);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response');
      console.log(formData);

      if (res === "ThankYou Payment SuccessFull") {
        toast.success(res);
      } else {
        toast.error(res);
      }
    } catch (error) {
      console.error('Error Selecting:', error);
      toast.error('There was an error processing your request.');
    }
  };

  return (
    <>
      <Header />
      <section className="inner-banner">
        <div className="containerx">
          <div className="title pull-left"></div>
          <div className="breadcumb pull-right">
         
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <h3 className="title">ADD INFORMATION</h3>
                <div className="inputBox">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="contact">Contact:</label>
                  <input
                    type="text"
                    id="contact"
                    placeholder="Enter Contact"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
              </div>
              <div className="col">
                <h3 className="title">PAYMENT</h3>
                <div className="inputBox">
                  <label htmlFor="cardname">Name On Card:</label>
                  <input
                    type="text"
                    id="cardname"
                    placeholder="Enter card name"
                    required
                    value={formData.cardname}
                    onChange={(e) => setFormData({ ...formData, cardname: e.target.value })}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="cardnumber">Credit Card Number:</label>
                  <input
                    type="number"
                    id="cardnumber"
                    placeholder="**** **** **** ****"
                    maxLength={12}
                    required
                    value={formData.cardnumber}
                    onChange={(e) => setFormData({ ...formData, cardnumber: e.target.value })}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="expMonth">Exp Month:</label>
                  <select
                    id="expMonth"
                    value={formData.expMonth}
                    onChange={(e) => setFormData({ ...formData, expMonth: e.target.value })}
                  >
                    <option value="">Choose month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <label htmlFor="expyear">Exp Year:</label>
                    <select
                      id="expyear"
                      value={formData.expyear}
                      onChange={(e) => setFormData({ ...formData, expyear: e.target.value })}
                    >
                      <option value="">Choose Year</option>
                      <option value={2023}>2023</option>
                      <option value={2024}>2024</option>
                      <option value={2025}>2025</option>
                      <option value={2026}>2026</option>
                      <option value={2027}>2027</option>
                    </select>
                  </div>
                  <div className="inputBox">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="number"
                      id="cvv"
                      placeholder={1234}
                      required
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" value="Pay" className="submit_btn" />
          </form>
        </div>
      </section>
      <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  pauseOnHover
  theme="colored"
 
  icon={true}
/>
      <Footer />
    </>
  );
};

export default Payment;




