import React from 'react'
import { Link, Route, Routes , Outlet} from 'react-router-dom'
import MyAccount from './MyAccount/MyAccount'
import {Security} from './Security/Security'
import {Settings} from './Settings/Settings'
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'
import './profile.css'
export const Profile = () => {
  const {lang : til, setLang} = useContext(LangContext)
  return (
    <div >


      <ul className='profile-list'>
        <li className='profile-listitem'>
        <Link to='/myaccaunt'>
        <div className='profile-div'>
          <h1>1</h1>
          <span>{lang[til].settings.account}</span>
        </div>
        </Link>
        </li>
        <li className='profile-listitem'>
        <Link to='/security'>
          <div className='profile-div'>
            <h1>2</h1>
            <span>{lang[til].settings.security}</span>
          </div>
      </Link>
        </li>
        <li className='profile-listitem'>
        <Link to='/payment'>
        <div className='profile-div'>
        <h1>3</h1>
        <div>
        <span>{lang[til].settings.payment}</span>
        <p>{lang[til].settings.addpayment}</p>
        </div>
        </div>
      </Link>
        </li>
      </ul>



    </div>
  )
}
