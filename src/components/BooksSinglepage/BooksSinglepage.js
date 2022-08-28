import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useParams   } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import Auidio  from '../../assets/image/auidio.svg'
import elektron  from '../../assets/image/elektron.svg'
import narxi  from '../../assets/image/narxi.svg'
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'
import dunyoningishlari from '../../assets/image/dunyonigishlari.png'
import ikkieshik from '../../assets/image/ikkieshik.png'
import tushda from '../../assets/image/tushda.png'
import ajdar from '../../assets/image/ajdar.png'
import './bookssinglepage.css'
export const BooksSinglepage = () => {
	const {lang : til, setLang} = useContext(LangContext)
  const {id} = useParams()
  const {token} = useAuth()
  const [book , setBook] = useState([]);
  useEffect(() => {
		axios
			.get(
				'https://book-service-layer.herokuapp.com/book/bookId/' + id ,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((res) => setBook(res.data))
			.catch((err) => console.log(err));
	}, []);
  console.log(book);
  return (
<div className='single'> 
<div className='book-single'>
	<div className='book-img'>
		<div className='img-block'>
		<img src={'https://book-service-layer.herokuapp.com/' + book.image} onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
        }} alt="nmanidir rasmi bor edi" />
		</div>
	</div>
	<div className='book-text'>
				<div>
					<h2>{book?.title}</h2>
					<h4>{lang[til].seinglebook.page} : <span>{book?.page}</span></h4>
					<h4>{lang[til].seinglebook.date} : <span>{book?.year}</span></h4>
					<h4>{lang[til].seinglebook.genre} : <span>Tarixiy</span></h4>
					<h4>{lang[til].seinglebook.publish} : <span>Hilol Nashr</span></h4>
				</div>
				<div>
					<div className='book-toliq'>
						<h3>{lang[til].seinglebook.inform} </h3>
						<hr />
					</div>
					<div >
						<h3 className='title'>
							{book?.description}
						</h3>
					</div>
				</div>
				<div className='typeof'>
					<h3>Mavjud formatlar</h3>
					<div className='turlari'>
						<div className='type'>
							<div>
								<img src={Auidio} alt="" />
								<h3>Qog’oz kitob</h3>
								<h4>27 000 so’m</h4>
							</div>
							<div>
								<img src={elektron} alt="" />
								<h3>Audiokitob</h3>
								<h4>6:23 soat</h4>
							</div>
							<div>
								<img src={narxi} alt="" />
								<h3>Elektron</h3>
								<h4>pdf, epub</h4>
							</div>
						</div>
						<div>
							<button className='qoshish'>{lang[til].seinglebook.add} </button>
						</div>
					</div>
				</div>
	</div>
</div>


				<div className='asarlari' style={{width:1400}}>
              <h2>  {lang[til].singleaut.asar} </h2>
              <Link to='/'>  {lang[til].singleaut.view}</Link>
            </div>
            <ul className='single-list' style={{width:1200}}>
							
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
							<li>
                <img src={dunyoningishlari} alt="" />
                <h4>Dunyoning ishlari</h4>
              </li>
              <li>
                <img src={ikkieshik} alt="" />
                <h4>Ikki eshik orasi</h4>
              </li>
            </ul>





</div>
    
  )
}


// {id: 21, title: 'Sariq devni minib', page: '220', year: '2013', price: '14', …}
// author_id: 70
// description: "Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi."

