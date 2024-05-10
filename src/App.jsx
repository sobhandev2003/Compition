import { useState } from 'react'


import './App.css'
import Nav from './components/Nav/Nav'
import Foter from './components/foter/Foter'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
    
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Foter/>
    </>
  )
}

export default App
