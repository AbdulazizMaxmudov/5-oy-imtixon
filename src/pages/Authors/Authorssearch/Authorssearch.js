import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../Card/Card'


export const Authorssearch = ({searchauthor , setSeachAuthors}) => {
  const navigate = useNavigate()
  return (
    <ul style={{display:'flex' , flexWrap:'wrap' , marginTop:100}}>
     { searchauthor?.length ?  
       
       (searchauthor.map((e)=> <Card key={e.id} e={e}/>)): 
       (<div>
        <h1 style={{color: '#C9AC8C' , textAlign:'center' , marginLeft:200 }}> afsuski bunday odam topilmadi </h1>
       <button className='btn btn-danger'  onClick={()=> navigate("/")} >  ortga qaytish</button>
       </div>)

     }
    </ul>
  )
}
