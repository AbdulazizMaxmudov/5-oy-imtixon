import axios from 'axios'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'

import AddBookimg from '../../assets/image/addBook.png'

export const AddBook = () => {
  const {lang : til, setLang} = useContext(LangContext)
  const {token} = useAuth()
  const handleAddBooks = (evt) =>{
    evt.preventDefault()
    const formData = new FormData()
    const {
      title ,
      page ,
      year,
      price,
      genre_id,
      author_id,
      description,
      image
  
    } = evt.target.elements;
    formData.append('title' , title.value);
    formData.append('page' , page.value);
    formData.append('year' , year.value);
    formData.append('price' , price.value);
    formData.append('genre_id' , genre_id.value);
    formData.append('author_id' , author_id.value);
    formData.append('description' , description.value)
    formData.append('image' , image.files[0])

    axios
    .post('https://book-service-layer.herokuapp.com/book', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
  }
  return (
   <div>
    <form className='author-form' onSubmit={handleAddBooks} >
    <div className='addauthor-block'>
      <div className='addauthor-imgblock' >
        <div className='author-img '>
          <img src={AddBookimg} alt="" />
          <h1>Ulugbek Hazinasi</h1>
        </div>
      <div className='add-file'>
						<label className='add-label' htmlFor='choose_file'>
            {lang[til].addbook.upload}
						</label>
						<input
							className='visually-hidden'
							name='image'
							type='file'
							id='choose_file'
						/>
					</div>
      </div>
      <div className='author-inputblcok'>
        <h1>{lang[til].addbook.add}</h1>
        <input className='author-input' type="text" placeholder='Title' name='title'/>
        <input className='author-input' type="number" placeholder='Pages' name='page' />
        <input className='author-input' type="number" placeholder='Year' name='year' />
        <input className='author-input' type="number" placeholder='Price' name='price' />
        <input className='author-input' type="number" placeholder='Ganre'  name='genre_id'/> 
        <input className='author-input' type="number" placeholder='Author id' name='author_id' />    
        <input className='author-input bio' type="text" placeholder='description' name="description"  />
        <button className='author-submitbtn' type='submit'>{lang[til].addbook.create}</button>
      </div>
    </div>
    </form>
 
   </div>
  )}
