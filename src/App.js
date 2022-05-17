import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'

import SpinnerCheck from './components/SpinnerCheck'
import Contact from './Contact'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/spin' element={<SpinnerCheck/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          
      </Routes>
    </Router>
  )
}

export default App
