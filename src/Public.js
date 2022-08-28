import { Link , Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { PublicHeader } from "./PublicHeader"

export const Public= ()=>{
  return (
    <div>
          
        <Routes>
          <Route path="/" element={<PublicHeader/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
 
  )
}