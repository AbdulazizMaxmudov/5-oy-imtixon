import {  useContext , useState } from "react";
import { AuthContext } from "../context/AuthContext"; 
export const  useAuth = () =>{
  const [userme , setUserme] = useState()
  const {token , setToken } = useContext(AuthContext)
return {token , setToken , userme , setUserme}
}