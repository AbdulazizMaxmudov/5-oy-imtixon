import axios from 'axios'
import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { LangContext } from '../../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../../lang/lang'
import './security.css'
export const Security = () => {
  const {lang : til, setLang} = useContext(LangContext)
  const {token} = useAuth()
const handlesecval = (evt)=>{
evt.preventDefault()
const formData = new FormData()
const {
  email ,
  currentPassword ,
  newPassword, 
  confirmPassword,
 
} = evt.target.elements;
formData.append('email' , email.value);
formData.append('currentPassword' , currentPassword.value);
formData.append('newPassword' , newPassword.value);
if(newPassword.value == confirmPassword.value) {
  axios 
.put("https://book-service-layer.herokuapp.com/user/security", formData, {
  headers: {
    Authorization: token.token,
  },
})
.then((res) => console.log(res.data))
.catch((err) => console.log(err));
} else {

}
}
  return (
    <div className='Security'>
<form onSubmit={handlesecval}>
<h1>{lang[til].security.change}</h1>
    <div>
    <p>{lang[til].security.email}</p>
    <input  className='input-block' type="email" name='email' />
    </div>
    <div>
      <p>{lang[til].security.current}</p>
      <input className='input-block' name='currentPassword' type='password' />
    </div>
    <div className='inline-div'>
      <div>
        <p>{lang[til].security.new}</p>
        <input className="input-inline" name='newPassword' type='password' />
      </div>
      <div>
        <p>{lang[til].security.confir}</p>
        <input className="input-inline" type='password' name='confirmPassword' />
      </div>
      </div>
      <button className='set-btn' type='submit'>{lang[til].security.save}</button>
</form>
      </div>
  )
}

