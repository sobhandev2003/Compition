import './Home.css'
import React from 'react'
import { HomeBackground } from '../Background/Backgroun'
import Product from '../Product/Product'

function Home() {
  
  return (
    <div className='home-main'>
      <HomeBackground/>
      <p className='site-titale'>FACKEEFY</p>
      <Product/>
    </div>
  )
}

export default Home