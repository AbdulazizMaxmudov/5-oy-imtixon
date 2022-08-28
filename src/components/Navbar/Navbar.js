import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Baddiyat from '../../assets/image/Badiiyat.svg'
import { LangContext } from '../../context/LangContext'
import { lang } from '../../lang/lang'

import Bratan from '../../assets/image/bratan.svg'
import { useAuth } from '../../hooks/useAuth'
import './navbar.css'


export const Navbar = () => {
  const {lang : til } = useContext(LangContext)
  const navigate = useNavigate()
  const [menu , setMenu] = useState(false)
  const {userme , setUserme , token} = useAuth()
  const handleLogOut = () => {
		window.localStorage.removeItem('token');
		navigate('/');
		window.location.reload();
	};
  useEffect(() => {
    axios.get('https://book-service-layer.herokuapp.com/user/me', {
      headers:{
        Authorization: token.token,
      },
    }   
     )
    .then(function (response) {
  
      setUserme(response.data);
    })
    .catch(function (error) {
    
      console.log(error);
    })
    .then(function () {
    });
  }, [userme]);
  return (
    <nav className='nav'>
      <div className='navbar'>
        <div>
          <NavLink to='/'><img src={Baddiyat} alt="" /></NavLink>
        </div>
        <div>
          <ul className='navbar-list'>
            <li className='navbar-listItem'>
            {/* {lang[til].navbar.authors} */}
              <NavLink to='/'>{lang[til].navbar.authors}</NavLink>
            </li>
            <li>
              <NavLink to='/books'>{lang[til].navbar.books}</NavLink>
            </li>
          </ul>
        </div>
        <div className='bratan-imgblock'>
          
            <button className='bratan-imgblock' onClick={()=> setMenu(!menu)}>
              {
              
              }
            <img className='bratan-img' src={`https://book-service-layer.herokuapp.com/${userme?.image}` } onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
        }}
             alt="" /> 
            </button>
            {menu && (
						<ul onClick={() => setMenu(false)} className='profile' >
							<li   className='profile__item'><NavLink className='profile__link' to='/profile'>{lang[til].navbar.profile}</NavLink></li>
							<li  className='profile__item'><NavLink className='profile__link' to='/addBook'>{lang[til].navbar.addbook}</NavLink></li>
							<li  className='profile__item'><NavLink className='profile__link' to='/addAuthor'>{lang[til].navbar.addauthor}</NavLink></li>
							<li onClick={handleLogOut}  className='profile__item'><button  className='btn btn-warning'>{lang[til].navbar.logout}</button></li>
						</ul>
					)}
         
        </div>
      </div>
    </nav>
  )
}
