import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const EditClasses = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);

  const [formData, setFormData] = useState({
 
    image: '',
    imagename: '',
    name: '',
    duration: '',
    trainer: '',
    description: ''
  });

  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result, imagename: file.name });
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
          duration: formData.duration,
          trainer:formData.trainer,
          description: formData.description
       

        }
      };

    try {
      const response = await axios.put(`http://localhost:5164/edit_classes?id=${id}`, payload);
      console.log(response);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response

      console.log(res);
      if (res == "update Successfully") {

        alert(res);
        navigate('/classesdetails');
      } else {
        alert(res);
        console.log("else block")
      }
    } catch (error) {
      console.error('Error updating class:', error);
      alert('Failed to update data.');
    }
  };

  return (
    <div id="content">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className='searchbar'>
            <h2 className='headingsame'>UPDATE</h2>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="registration-form">
          <h2 className='classesform'>Update Form</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" name="image" onChange={handleImageChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <input type="text" id="duration" name="duration" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="trainer">Trainer:</label>
              <input type="text" id="trainer" name="trainer" value={formData.trainer} onChange={(e) => setFormData({ ...formData, trainer: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="description">Link:</label>
              <textarea id="link" name="link" value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })}></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditClasses;
