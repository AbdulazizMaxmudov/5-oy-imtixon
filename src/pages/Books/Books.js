import React, { useRef, useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import {BookTemuriylar} from './BookTemuriylar/BookTemuriylar' 
import {BookJadidlar} from './BookJadidlar/BookJadidlar'
import {BookSovet} from './BookSovet/BookSovet'
import {BookMustaqillik} from './BookMustaqillik/BookMustaqillik'
import './books.css'
import axios from 'axios'
import { BookSearch } from './BookSearch/BookSearch'
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'

export const Books = () => {
  const {lang : til, setLang} = useContext(LangContext)
  const Inputvalbook = useRef()
  const booknavigate = useNavigate()
  const [booksearchdata , setBooksearch] = useState()
  const HandeBookVal = (evt) => {
    evt.preventDefault()
    console.log(Inputvalbook.current.value);
    booknavigate('booksearch')
    axios.get(`https://book-service-layer.herokuapp.com/book/search/?book=${Inputvalbook.current.value}`)
    .then(function (response) {
      
      setBooksearch(response.data);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .then(function () {
    });

    Inputvalbook.current.value = ''
  }
    return (
      <div className="books">
        <div className="container">
        <div className='header-search'>
      <div className='serach-img'>
      <h1>{lang[til].header.search}</h1>
      </div>
      <div className='header-from'>
        <form  onSubmit={HandeBookVal}>
          <input ref={Inputvalbook} className='header-input' type="text"  placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
          <button type='submit'>{lang[til].header.search}</button>
          </form> 
      </div>
    </div>
          <h2 className="books-title">{lang[til].header.category}</h2>
        <div className="booklink">
      <NavLink index to='temuriylar'>Temuriylar ktobi</NavLink>
      <NavLink to='jadidlar'>Jadidlar </NavLink>
      <NavLink to='sovet'>Sovet</NavLink>
      <NavLink to='mustaqillik'>Mustaqillik</NavLink>
      {/* <NavLink to='booksearch'>Mustaqillik</NavLink> */}
      </div>
      <Routes>
        <Route index  path="/temuriylar" element={<BookTemuriylar/>}/>
        <Route path="/jadidlar" element={<BookJadidlar/>}/>
        <Route path="/sovet" element={<BookSovet/>}/>
        <Route path="/mustaqillik" element={<BookMustaqillik/>}/>
        <Route path="/booksearch" element={<BookSearch booksearchdata={booksearchdata}/>}/>
      </Routes>
        </div>
        
      </div>
      
  
    )
  
}
