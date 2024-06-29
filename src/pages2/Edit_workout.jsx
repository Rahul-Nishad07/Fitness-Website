
import React from 'react'
import '/src/pages/admin.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Edit_workout = () => {
  const navigate = useNavigate();
  const [id,setId] = useState(0);

    const [formData, setFormData] = useState({
      
        image: '',
        imagename:'', 
        name: '',
        description: '',
        reps: ''
       
      });


      const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result,
            imagename: file.name
           });
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };

      
      useEffect(() => {
        setId((localStorage.getItem('id')));
        }, [])
    
    //  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const payload = {
    //   eventID: "1001",
    //   addInfo: {
    //     id:formData.id,
    //     image: formData.image,
    //     imagename: formData.imagename,
    //     name: formData.name,
    //     description: formData.description,
    //     reps: formData.reps
      
    //   }
    // };

    const handleUpdate = async (e) => {
      e.preventDefault();
      const payload = {
        eventID: "1001",
        addInfo: {
          id: `${id}`,
          image: formData.image,
          imagename: formData.imagename,
          name: formData.name,
          description: formData.description,
          reps:formData.reps
        

        }
      };

    try {
      const response = await axios.put(`http://localhost:5164/edit_workout?id=${id}`, payload);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response
      console.log(res)
      if (res == "update successfully") {
        alert(res);
        navigate('/workoutdetails');
      } else {
        alert(res);
       console.log("else Block")
      }
    } catch (error) {
      console.error('Error Classes form:', error);
      // Handle error
    }
  };


  return (
    <div>
    <div id="content">
    <nav className="navbar navbar-default">
    <div className="container-fluid">
              <div className='searchbar'>
              <h2 className='headingsame'>WORKOUTS</h2>
              {/* <input className='searchbar1' placeholder="Search" /> */}
            </div>  
          </div>
    </nav>
    <div className="container-fluid">
    <div className="registration-form">
      <h2 className='classesform'>WORKOUT FORM</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />
                {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps:</label>
          <input type="text" id="reps" name="reps" value={formData.reps} onChange={(e) => setFormData({ ...formData, reps: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} ></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  </div></div>
  )
}

export default Edit_workout