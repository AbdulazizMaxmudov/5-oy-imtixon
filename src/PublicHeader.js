import { Link } from "react-router-dom"

import './App.css'
export const PublicHeader = () =>{
  return(
    <div className="publichader__block">
          <ul className="pc__list ">
            <li>
              <button className="pc__list-item">
              <Link to='/login'>Sign In</Link>
              </button>
              
            </li>
            <li>
              <button className="pc__list-item">
              <Link to='/register'>Sign Up</Link>
              </button>
            </li>
          </ul>
          <h1 className="pc__title">
            Badiiyat kitob saxifasi 
          </h1>
    </div>    
  )
}