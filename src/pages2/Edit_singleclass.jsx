import React from 'react'
import '/src/pages/admin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Edit_singleclass = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);

  
  const [formData, setFormData] = useState({
   
    image: '',
    name: '',
    duration: '',
    trainer: '',
    description:'',
    deschead: '',
    description2: '',
    workbenifits: '',
    heading1: '',
    heading2:'',
    heading3:'',
    heading4:''
});


const handleImageChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setFormData({ ...formData, image: reader.result });
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
          name: formData.name,
          duration: formData.duration,
          trainer: formData.trainer,
          description: formData.description,
          deschead: formData.deschead,
          description2: formData.description2,
          workbenifits: formData.workbenifits,
          heading1: formData.heading1,
          heading2:formData.heading2,
          heading3:formData.heading3,
          heading4:formData.heading4

        }
      };

            
            
    
    try {
        const response = await axios.put(`http://localhost:5164/edit_singleclass?id=${id}`, payload);
        console.log(response);

        let res = response.data.result.rData.rMessage;
        console.log(response.data, 'api response'); 
   
         if(res=="update successfully")
          {

           alert(res);
           navigate('/singlepagedetails');
         }
        else{ 
          alert(res);
          console.log("else block")
        }
    } catch (error) {
        console.error('Error Classes form:', error);
        console.log("catch Blog");
        // Handle error
    }
};
  return (
    <div>  <div id="content">
    <nav className="navbar navbar-default">
    <div className="container-fluid">
            <div className='searchbar'>
            <h2 className='headingsame'>SINGLE PAGE</h2>
            {/* <input className='searchbar1' placeholder="Search" /> */}
          </div>  
        </div>
    </nav>
    <div className="container-fluid">
    <div className="registration-form">
    <h2 className='classesform'>SINGLE PAGE</h2>
    <form onSubmit={handleUpdate}>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input type="file" id="image" name="image" onChange={handleImageChange} />
        {formData.image && <img src={formData.image} alt="Selected" />}
        {/* value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} */}
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration:</label>
        <input type="text" id="duration" name="duration" value={formData.duration} onChange={(e)=>setFormData({...formData,duration:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="trainer">Trainer:</label>
        <input type="text" id="trainer" name="trainer" value={formData.trainer} onChange={(e)=>setFormData({...formData,trainer:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="name">Dess. Head</label>
        <input type="text" id="deschead" name="deschead" value={formData.deschead} onChange={(e)=>setFormData({...formData,deschead:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description-2:</label>
        <textarea id="description2" name="description2" value={formData.description2} onChange={(e)=>setFormData({...formData,description2:e.target.value})}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="name">Work and Benifits</label>
        <input type="text" id="workbenifits" name="workbenifits" value={formData.workbenifits} onChange={(e)=>setFormData({...formData,workbenifits:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Heading-1</label>
        <input type="text" id="heading1" name="heading1" value={formData.heading1} onChange={(e)=>setFormData({...formData,heading1:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Heading-2:</label>
        <input type="text" id="heading2" name="heading2" value={formData.heading2} onChange={(e)=>setFormData({...formData,heading2:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Heading-3:</label>
        <input type="text" id="heading3" name="heading3" value={formData.heading3} onChange={(e)=>setFormData({...formData,heading3:e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Heading-4:</label>
        <input type="text" id="heading4" name="heading4" value={formData.heading4} onChange={(e)=>setFormData({...formData,heading4:e.target.value})} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    </div>
  </div></div>
  )
}

export default Edit_singleclass