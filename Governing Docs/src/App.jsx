import './App.css'
import React from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/Home/Hero'
import ProblemSolution from './components/Home/ProblemSolution'
import Review from './components/Home/Review'

const App = () => {
  return (
    <main className='font-nunito-sans bg-[url(/hero-bg.svg)] min-h-svh bg-no-repeat'>
     <Navbar/>
    
    <Hero/>
    
    <ProblemSolution/>
    <Review/>

     <Footer/>

      </main>
  )
}

export default App