import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Authors } from '../../pages/Authors/Authors'
import { Books } from '../../pages/Books/Books' 

export const MainPage = () => {
  return (
  
 <Routes>
  <Route path='/*' element={<Authors/>}/>
  <Route  path='/books/*' element={<Books/>}/>
 </Routes>
      
    
      
  )
}
