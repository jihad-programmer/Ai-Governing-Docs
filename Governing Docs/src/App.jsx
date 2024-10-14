import './App.css'
import React from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/Home/Hero'
const App = () => {
  return (
    <main className='font-nunito-sans bg-[url(/hero-bg.svg)] min-h-svh bg-no-repeat'>
     <Navbar/>
    
    <Hero/>

     <Footer/>

      </main>
  )
}

export default App