
import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';


const Edit_package = () => {
  const navigate = useNavigate();
  const [id,setId] = useState(0);

    const [formData, setFormData] = useState({
      
        image: '',
        imagename:'',
        name: '',
        trainer: '',
        price: '',
        heading1: '',
        heading2: '',
        heading3: '',
        heading4: ''
        
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


      const handleUpdate = async (e) => {
        e.preventDefault();
        const payload = {
          eventID: "1001",
          addInfo: {
            id: `${id}`,
            image: formData.image,
            imagename: formData.imagename,
            name: formData.name,
            trainer: formData.trainer,
            price:formData.price,
            heading1: formData.heading1,
            heading2: formData.heading2,
            heading3: formData.heading3,
            heading4: formData.heading4

          }
        };

        try {
          const response = await axios.put(`http://localhost:5164/edit_package?id=${id}`, payload);
          console.log(response);
          let res = response.data.result.rData.rMessage;
          console.log(response.data, 'api response'); // handle response

          console.log(res)
          if (res == "update Successfully") {

            alert(res);
            navigate('/packagedetails');
          } else {
            alert(res);
            console.log("else block")
            
          }
        } catch (error) {
          console.error('Error Package form:', error);
          console.log("catch Blog");
          // Handle error
        }
      }


  return (
    <div> <div id="content">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className='searchbar'>
          <h2 className='headingsame'>UPDATE FORM</h2>
         
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <div className="registration-form">
        <h2 className='classesform'>PACKAGES FORM</h2>
        <form onSubmit={handleUpdate}>
         
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="trainer">Trainer Name:</label>
            <input type="text" id="trainer" name="trainer" value={formData.trainer} onChange={(e) => setFormData({ ...formData, trainer: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="heading1">Heading 1:</label>
            <textarea id="heading1" name="heading1" value={formData.heading1} onChange={(e) => setFormData({ ...formData, heading1: e.target.value })}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="heading2">Heading 2:</label>
            <textarea id="heading2" name="heading2" value={formData.heading2} onChange={(e) => setFormData({ ...formData, heading2: e.target.value })}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="heading3">Heading 3:</label>
            <textarea id="heading3" name="heading3" value={formData.heading3} onChange={(e) => setFormData({ ...formData, heading3: e.target.value })}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="heading4">Heading 4:</label>
            <textarea id="heading4" name="heading4" value={formData.heading4} onChange={(e) => setFormData({ ...formData, heading4: e.target.value })}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} />
            {formData.image && <img src={formData.image} alt="Selected" />}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default Edit_package