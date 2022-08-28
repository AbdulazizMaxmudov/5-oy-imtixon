import axios from "axios"
import { useRef, useState } from "react"
import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { Card } from "../Card/Card"
import './authors.css'
import { Authorssearch } from "./Authorssearch/Authorssearch"
import { Jadidlar } from "./Jadidlar/Jadidlar"
import { Mustaqillik } from "./Mustaqillik/Mustaqillik"
import { Sovet } from "./Sovet/Sovet"
import { Temuriylar } from "./Temuriylar/Temuriylar"
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'

export const Authors = () => {
  const {lang : til, setLang} = useContext(LangContext)
  const navigate = useNavigate()
  const [searchauthor , setSeachAuthors] = useState()
  const Inputval = useRef()
  const HandeAuthorVal = (evt) => {
    evt.preventDefault()
    console.log(Inputval.current.value);
    navigate('/authorssearch')
    axios.get(`https://book-service-layer.herokuapp.com/author/search/?author=${Inputval.current.value}`)
    .then(function (response) {
      
      setSeachAuthors(response.data);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .then(function () {
    });
    Inputval.current.value = ''

  }
  return (
    <div className="authors">
      <div className="container">
      <div className='header-search'>
      <div className='serach-img'>
        <h1>{lang[til].header.search}</h1>
      </div>
      <div className='header-from'>
        <form  onSubmit={HandeAuthorVal}>
          <input ref={Inputval} className='header-input' type="text"  placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
          <button className="search-sp">{lang[til].header.search}</button>
          </form> 
      </div>
    </div>
        <h2 className="authors-title">{lang[til].header.category}</h2>
      <div className="linnklar">
    <NavLink to='/'>Temuriylar</NavLink>
    <NavLink to='jadidlar'>Jadidlar </NavLink>
    <NavLink to='sovet'>Sovet</NavLink>
    <NavLink to='mustaqillik'>Mustaqillik</NavLink>
    </div>
    <Routes>
      <Route path="/" element={<Temuriylar/>}/>
      <Route path="jadidlar" element={<Jadidlar/>}/>
      <Route path="sovet" element={<Sovet/>}/>
      <Route path="mustaqillik" element={<Mustaqillik/>}/>
      <Route path="/authorssearch" element={<Authorssearch 
      searchauthor={searchauthor} setSeachAuthors={setSeachAuthors}/>}/>
    </Routes>
      </div>
      <div className="container">
        
      </div>
    </div>
    

  )
}