import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './singlepage.css'
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'
import Vectorauthor from '../../assets/image/Vectorauthor.svg'
import dunyoningishlari from '../../assets/image/dunyonigishlari.png'
import ikkieshik from '../../assets/image/ikkieshik.png'
import tushda from '../../assets/image/tushda.png'
import ajdar from '../../assets/image/ajdar.png'
export const SinglePage = () => {
  const {lang : til, setLang} = useContext(LangContext)
  const {token} = useAuth()
  const {id} = useParams()
  const [authorsingle , setAuthorSingle] = useState()
  useEffect(() => {
 axios.get(`https://book-service-layer.herokuapp.com/author/authorId/` + id ,
 {
  headers: {
    Authorization: token.token,
  },
},
 )
 .then((res) => setAuthorSingle(res.data))
			.catch((err) => console.log(err));
  }, []);
  console.log(authorsingle);
  return (
    <div className='single'>
      <div className='single-block'>
        <div className='single-image-block'>
          <div className='single-img'>
            <img src={'https://book-service-layer.herokuapp.com/' + authorsingle?.image} onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
        }} alt="" />
          </div>
          <div className='img-text'>
            <div>
              <p>{lang[til].singleaut.brith}</p>
              <h3>{authorsingle?.date_of_birth} </h3>
              <span>Tashkent</span>
            </div>
            <div>
              <p>{lang[til].singleaut.death}</p>
              <h3>{authorsingle?.date_of_death}</h3>
              <span>Tashkent</span>
            </div>
          </div>
        </div>
        <div className='single-about'>
          <div>
            <div className='singlelorems'>
              <h2>{authorsingle?.first_name} {authorsingle?.last_name}</h2>
              <p>Lorem ipsum dolor sit amet consectetur   iste voluptatem excepturi  ex placeat sunt necessitatibus. Officiis corrupti, quod nostrum, eaque cum odio nisi praesentium pariatur modi et ea! Aliquam, dolore eaque! Aspernatur, perferendis odit enim beatae dicta delectus! Est molestiae nesciunt, sunt ut repellendus error dicta voluptate nihil, modi hic rem deserunt sed quidem atque aut, totam culpa! Laudantium, soluta corrupti tempore voluptate voluptatibus nam distinctio et, quod animi dolor doloremque rerum laboriosam nemo repellat. Deleniti recusandae hic accusamus necessitatibus atque at maxime amet!</p>
            </div>
            <div className='vector'>
              <span> <img src={Vectorauthor} alt="" /> IJODI</span>
            <p>{authorsingle?.bio}</p>
            </div>
            <div className='asarlari'>
              <h2> {lang[til].singleaut.asar} </h2>
              <Link to='/'>{lang[til].singleaut.view}</Link>
            </div>
            <ul className='single-list'>
             <li>
                <img src={dunyoningishlari} alt="" />
                <h4>Dunyoning ishlari</h4>
              </li>
              <li>
                <img src={ikkieshik} alt="" />
                <h4>Ikki eshik orasi</h4>
              </li>
              <li>
                <img src={tushda} alt="" />
                <h4>Tushda kechgan 
                  umrlar</h4>
              </li>
              <li>
                <img src={ajdar} alt="" />
                <h4>“Ajdar”ning tab</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
