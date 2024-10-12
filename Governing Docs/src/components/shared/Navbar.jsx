import React, { useState } from 'react'
import Container from "../common/Container"
import Logo from './Logo'
import Button from '../common/button' 
import {navItems} from '../../lib/Db/index'
import MobileMenu from './MobileMenu'


const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = ()=> {
  setIsMenuOpen(!isMenuOpen)
}

  return (
    <nav className='py-5'>
       
       <Container>
             <div className='flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full'>

                <Logo/>

                <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
                  {navItems.map( ({label, link},i) => (
                     
                        <a href="{link}" key={i}>
                        <p className='text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer'>{label}</p>
                        </a>
                    
                  ) )}
                </div>

                       <div className='flex justify-center items-center gap-2.5'>
                        
                            <button className='lg:hidden block text-accent' onClick={toggleMenu}>
                            <div className='space-y-1'>
                                <span className='block w-6 h-0.5 bg-black'/>
                                <span className='block w-6 h-0.5 bg-black'/>
                                <span className='block w-6 h-0.5 bg-black'/>
                                </div>
                            </button>
                          


                <Button>Get Started Today</Button>

                    </div>  
         </div>
     </Container>                 

     {isMenuOpen && <MobileMenu Toggle={toggleMenu}/>}

        </nav>
         
  )
}

export default Navbar

