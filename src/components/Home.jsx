import React from 'react'
import HomeCarousel from './HomeCarousel'
import Products from './Products'

export default function Home() {
  return (
    <div className='container'>
        <HomeCarousel/>  
        <Products/>
    </div>
  )
}
