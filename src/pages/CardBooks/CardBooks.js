import React from 'react'
import { Link } from 'react-router-dom'
import './cardbook.css';

export const CardBooks = ({e}) => {
  return (
    <li className='list'>
    <Link to={'/booksinglepage/' + e.id}  className='link'> 
    <div className='imgblock'>
    <img src={`https://book-service-layer.herokuapp.com/${e.image}`} onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
        }} alt="" />
    </div>
    <h2>{e.title}</h2>
    <p> narxi {e.price}</p>
    <p> yili {e.year}</p>
    </Link>     
    </li>
  )
}
