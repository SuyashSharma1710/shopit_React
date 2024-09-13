import { useState } from 'react';
import './App.css';
import {Navbar, Banner, Productwindow, About, Contact, Footer } from './components';




function App() {

  return (
    <div className='bg-black'>
      <Navbar />
      <Banner />
      <Productwindow id="product"/>
      <About />     
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App