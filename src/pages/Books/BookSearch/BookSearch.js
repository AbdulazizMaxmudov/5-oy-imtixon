import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardBooks } from '../../CardBooks/CardBooks'

export const BookSearch = ({booksearchdata}) => {
  const navigate = useNavigate()
  return (   
     <ul style={{display:'flex' , flexWrap:'wrap' , marginTop:100}}>
  { booksearchdata?.length ?  
    
    (booksearchdata.map((e)=> <CardBooks key={e.id} e={e}/>)): 
    (<div>
     <h1 style={{color: '#C9AC8C' , textAlign:'center' , marginLeft:200 }}> afsuski bunday kitob topilmadi </h1>
    <button className='btn btn-danger'  onClick={()=> navigate("/books")} >  ortga qaytish</button>
    </div>)

  }
 </ul>
  )
}
