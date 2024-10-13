import './App.css'
import React from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

const App = () => {
  return (
    <main>
     <Navbar/>
    
    <div className='min-h-[70vh]'></div>

     <Footer/>

      </main>
  )
}

export default App