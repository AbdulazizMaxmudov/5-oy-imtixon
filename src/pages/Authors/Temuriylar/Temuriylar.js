import  { useEffect, useState } from 'react'
import { Card } from '../../Card/Card'
import axios from 'axios'
export const Temuriylar = () => {
  const [authors , setAuthors] = useState([])
  useEffect(()=>{
    axios.get('https://book-service-layer.herokuapp.com/author/genreId/1')
  .then(function (response) {
    
    setAuthors(response.data);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
  });
  },[])

  return (
    <ul className="authors-list">
    {authors.map((e)=>( 
          <Card  key={e.id} e={e}/>
    ))}
    </ul>
  )
}