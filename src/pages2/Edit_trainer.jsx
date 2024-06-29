
import React from 'react'
import '/src/pages/admin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form } from 'react-router-dom'

const Edit_trainer = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  

  const [formData, setFormData] = useState({
  
    image: '',
    imagename: '',
    name: '',
    experience: '',
    work: ''
  });



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
    setFormData({
       image:reader.result,
       imagename:file.name
    })

    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };



  useEffect(() => {
    setId((localStorage.getItem('id')));

  }, [])


  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        id: `${id}`,
        image: formData.image,
        imagename: formData.imagename,
        name: formData.name,
        experience: formData.experience,
        work: formData.work
      }
    };
    try {
      const response = await axios.post(`http://localhost:5164/edit_trainer?id=${id}`, payload);
      console.log(response);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response
      // setShowPopup(true);


      // Show the popup after successful registration
      console.log(res);
      if (res == "update Successfully") {

        alert(res);
        navigate('/trainerDetails');
      }
      else {
        alert(res);
        console.log("else block");
     

      }
    } catch (error) {
      console.error('Error Trainers form:', error);
      console.log("catch blog");

    }
  }


  return (
    <div>
      <div id="content">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className='searchbar'>
              <h2 className='headingsame'>TRAINERS</h2>
              {/* <input className='searchbar1' placeholder="Search" /> */}
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="registration-form">
            <h2 className='classesform'>TRAINERS UPDATE</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Experience:</label>
                <input type="text" id="experience" name="experience" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="work">Work</label>
                <input type="text" id="work" name="work" value={formData.work} onChange={(e) => setFormData({ ...formData, work: e.target.value })} />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div></div>
  )
}

export default Edit_trainer