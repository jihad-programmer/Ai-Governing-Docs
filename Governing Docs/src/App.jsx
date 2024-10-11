import './App.css'
import React from 'react'
import Button from './Components/common/Button'
import SectionTitle from './components/common/SectionTitle'
import GradientText from './components/common/GradientText'

const App = () => {
  return (
    <>
      
      <Button>
        primary Button
      </Button>

      <Button className="bg-white text-black">
        secondary Button
      </Button>

     <SectionTitle gradient='solution'>problem &</SectionTitle>

      </>
  )
}

export default App