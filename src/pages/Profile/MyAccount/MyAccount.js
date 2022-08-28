import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/useAuth'
import Camera from '../../../assets/image/camera.svg'
import './myaccount.css'
 const MyAccount = () => {

 const {token} = useAuth()
 const {userme , setUserme} = useAuth()
useEffect(() => {
  axios.get('https://book-service-layer.herokuapp.com/user/me', {
    headers:{
      Authorization: token.token,
    },
  }   
   )
  .then(function (response) {
    console.log(response.data);
    setUserme(response.data);
  })
  .catch(function (error) {
  
    console.log(error);
  })
  .then(function () {
  });
}, [userme]);

  const handleputval = (evt) =>{
    evt.preventDefault()
    const formData = new FormData()
    const {
      first_name ,
      last_name ,
      phone, 
      image
    } = evt.target.elements;
    formData.append('first_name' , first_name.value);
    formData.append('last_name' , last_name.value);
    formData.append('phone' , phone.value);
    formData.append('image' , image.files[0])
    axios 
    .put("https://book-service-layer.herokuapp.com/user/account", formData, {
      headers: {
        Authorization: token.token,
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }
  return (
<div>
<form onSubmit={handleputval}>
<div className='my-accblock'>
<div className='my-accimgblock' >
        <div className='acc-img'>
          <img src={`https://book-service-layer.herokuapp.com/${userme?.image}` } onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
        }} alt="" />
        </div>
      <div className='acc-camera'>
						<label className='acc-label' htmlFor='choose_file'>
						<img src={Camera} alt="" />
						</label>
						<input
							className='visually-hidden'
							name='image'
							type='file'
							id='choose_file'
						/>
					</div>
      </div>
      <div className='my-accinputblock'>
        <h1>my profile</h1>
        <div>
        <p>first name</p>
        <input  className='input-block' type="text" name="first_name" id="firstname" defaultValue={userme?.first_name} />
        </div>
        <div>
          <p>Last Name</p>
          <input className='input-block' name='last_name' type="text" defaultValue={userme?.last_name} />
        </div>
        <div className='inline-div'>
          <div>
            <p>Phone</p>
            <input className="input-inline" name='phone' type="number" defaultValue={userme?.phone} />
          </div>
          <div>
            <p>email</p>
            <input className="input-inline"  name='email' type="email" defaultValue={userme?.email} />
          </div>
        
        </div>
      </div>
      
</div>
<button className='acc-btn' type='submit'>Save Changes</button>
  
</form> 
</div>
  )
} 
export default MyAccount;