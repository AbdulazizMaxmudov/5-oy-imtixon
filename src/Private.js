import { Home } from "./components/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import {Routes , Route  , Outlet} from 'react-router-dom'
import { SinglePage } from "./components/SinglePage/SinglePage"
import { BooksSinglepage } from "./components/BooksSinglepage/BooksSinglepage"
import { Profile } from "./pages/Profile/Profile"
import { AddBook } from "./pages/AddBook/AddBook"
import { AddAouthor } from "./pages/AddAuthor/AddAouthor"
import MyAccount from "./pages/Profile/MyAccount/MyAccount"
import {Security} from "./pages/Profile/Security/Security"
import {Settings} from "./pages/Profile/Settings/Settings"
import { Authorssearch } from "./pages/Authors/Authorssearch/Authorssearch"
export const Private = ()=>{
  return (
    <>
    
    <Navbar/> 
    <Routes>
      <Route path='/*'  element={<Home/>}/>
      <Route path="/singlepage/:id" element={<SinglePage/>}/>
      <Route path={'/booksinglepage/:id'} element={<BooksSinglepage/>}/>
      <Route  path='/profile' element={<Profile/>}/>
      <Route  path="/myaccaunt" element={<MyAccount/>}/>
      <Route  path="/security" element={<Security/>}/>
      <Route path="/payment" element={<Settings/>}/>
      <Route  path='/addBook' element={<AddBook/>}/>
      <Route path='/addAuthor' element={<AddAouthor/>}/>
      <Route path='*' element={<h2>Error 404</h2>} />
    </Routes>
  <Outlet/>
    </>
  )
}