import React from 'react'
import { AddBook } from '../AddBook/AddBook'
import AddAuthor from '../../assets/image/addAuthor.png'
import { useAuth } from '../../hooks/useAuth'
import axios from 'axios'
import './addauthor.css'
import { LangContext } from '../../context/LangContext'
import { useContext } from 'react'
import { lang } from '../../lang/lang'

export const AddAouthor = () => {
  const {lang : til, setLang} = useContext(LangContext)
  const {token} = useAuth()
  const handleAddAuthors = (evt) =>{
    evt.preventDefault()
    const formData = new FormData()
    const {
      first_name ,
      last_name ,
      date_of_birth,
      date_of_death,
      country,
      genre_id,
      bio,
      image
  
    } = evt.target.elements;
    formData.append('first_name' , first_name.value);
    formData.append('last_name' , last_name.value);
    formData.append('date_of_birth' , date_of_birth.value);
    formData.append('date_of_death' , date_of_death.value);
    formData.append('country' , country.value);
    formData.append('genre_id' , genre_id.value);
    formData.append('bio' , bio.value)
    formData.append('image' , image.files[0])
   
         axios
    .post('https://book-service-layer.herokuapp.com/author', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
  }
  return (
   <div>
    <form className='author-form' onSubmit={handleAddAuthors} >
    <div className='addauthor-block'>
      <div className='addauthor-imgblock'>
        <div className='author-img'>
          <img src={AddAuthor} alt="" />
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
        <h1>{lang[til].addbook.addaut}</h1>
        <input className='author-input' type="text" placeholder='First name' name='first_name'/>
        <input className='author-input' type="text" placeholder='Last name' name='last_name' />
        <input className='author-input' type="text" placeholder='Date of birth' name='date_of_birth' />
        <input className='author-input' type="number" placeholder='Date of death' name='date_of_death' />
        <input className='author-input' type="text" placeholder='Country'  name='country'/>
        <input className='author-input' type="number" placeholder='Ganre'  name='genre_id'/>     
        <input className='author-input bio' type="text" placeholder='Bio' name="bio"  />
        <button className='author-submitbtn' type='submit'>{lang[til].addbook.create}</button>
      </div>
    </div>
    </form>
 
   </div>
  )
}
