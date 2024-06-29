import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Informations = () => {
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
    
    
    
  return (
    <div>  <div className="modal contact-page fade booking-form" id="booking-form" tabIndex={-1} role="dialog" aria-labelledby="booking-form">
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
  </div></div>
  )
}

export default Informations