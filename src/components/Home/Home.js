import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Authors } from '../../pages/Authors/Authors'
import { Books } from '../../pages/Books/Books';
import { Header } from '../Header/Header'
import { MainPage } from '../Main/MainPage';
import './home.css'


export const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <MainPage/>
      
    </div>
  )
}
