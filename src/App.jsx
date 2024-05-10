import { useState } from 'react'


import './App.css'
import Nav from './components/Nav/Nav'
import Foter from './components/foter/Foter'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <>
    <section className='nav'>
    <Nav/>
    </section>
    <section className='after-nav'>
    <div className='route-container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
    <div className=''>
    <Foter/>
    </div>
    </section>
    </>
  )
}

export default App
