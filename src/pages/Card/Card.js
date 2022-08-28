import React from 'react'
import {Link} from 'react-router-dom'
import './card.css';
export const Card = ({e}) => {
  return (
    <li className='list'>
    <Link to={'/singlepage/' + e.id} className='link'> 
    <div className='imgblock'>
    <img src={`https://book-service-layer.herokuapp.com/${e.image}` } onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
        }} alt="" />
    </div>
    <h2>{e.first_name}</h2>
    <h2>{e.last_name}</h2>
    <p><span>{e.date_of_birth}</span>-<span>{e.date_of_death}</span></p>
    </Link>     
    </li>

  )
}
