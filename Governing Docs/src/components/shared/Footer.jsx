import React from 'react'
import Container from '../common/Container'
import { navItems, SocialIcon } from '../../lib/Db'
function Footer() {
  return (
    <footer className='pt-5 lg:pt-24'>
      <Container>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-2.5 py-5'>

              <h1 className='font-space-grotesk xl:text-4xl sm:text-2xl text-xl font-bold'>
                Ai GoverningDocs
               </h1>


                <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
             {navItems.map(({link,label},i)=> (
                <a href={link} key={i} className='block text-lg text-accent hover:text-primary transition-colors duration-150'>
                    {label}
                </a>

            ))}
                </div>  

                <div className='flex justify-center items-center gap-2.5'>
                  {SocialIcon.map(({img,url})=>
                      <a href={url}>
                        <img src={img} alt="Social Icon" className='size-[36px]' />
                      </a>
                  )}
                </div>

          </div>



          <div className='footer-border-color border-t border-transparent mt-5 md:mt-[50px] lg:mt-[106px]'> 
            <p className='text-lg text-center leading-[18px] text-[#111111] py-5'> Ai GoverningDocs 2024. All Rights Reserved.</p>
          </div>
      </Container>
    </footer>
  )
}

export default Footer


