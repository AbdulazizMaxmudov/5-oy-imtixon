import  { useEffect, useState } from 'react'
import axios from 'axios'
import { CardBooks } from '../../CardBooks/CardBooks'
export const BookTemuriylar = () => {
  const [bookAuthors , setBookAuthors] = useState([])
  useEffect(()=>{
    axios.get('https://book-service-layer.herokuapp.com/book/genreId/1')
  .then(function (response) {
    
    setBookAuthors(response.data);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
  });
  },[])

  return (
    <ul className="authors-list">
    {bookAuthors.map((e)=>( 
          <CardBooks  key={e.id} e={e}/>
    ))}
    </ul>
  )
}