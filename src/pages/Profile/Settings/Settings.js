import React from 'react'
import { LangContext } from '../../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../../lang/lang'
import './settings.css'
export const Settings = () => {
  const {lang : til, setLang} = useContext(LangContext)
  return (
    <div className='settings'>
      <h1> {lang[til].settings.setting} </h1>
      <p>{lang[til].settings.language}</p>
      <select className='select visualy-hidden' defaultValue={til} onChange={(evt) => setLang(evt.target.value)} > 
        <option value="uz">uz</option>
        <option value="en">en</option>
      </select>
    </div>
  )
}

