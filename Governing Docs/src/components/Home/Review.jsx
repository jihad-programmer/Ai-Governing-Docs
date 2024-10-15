import React, { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import Container from '../common/Container'
import ReviewCard from './ReviewCard'
import { ReviewsData } from '../../lib/Db'
import { Star } from '../Icon'
import { cn } from '../../lib/utils'
function Review() {

  const [active,setActive] = useState(1);

  const activeReview = ReviewsData[active];
  return (
    <section className=' my-[50px] md:[80px] lg:my-[100px] xl:my-[150px] bg-[#F6F6F6] lg:py-10 xl:py-20'>
    <Container>
      <SectionTitle gradient='Our Client' className='text-center'>Reviews From </SectionTitle>
    </Container>
  
    <div className='pt-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px]'>
  
      <div className='flex w-full gap-5'>
         {/* REVIEW LINE */}
      <div className='bg-[#E2DED8] w-[5px] rounded-[50px]'>
       <div className='spy-[15px]'>
        {/* REPETITION-ELEMENT-ARRAY BY SHAHRIAR HASAN GITHUB| */}
               {
                  Array.from(Array(3).keys()).map((el) => <div key={el} className={cn("w-[5px] h-[92px] rounded-[20px] bg-transparent", active== el && "bg-gradient-primary")}/>)
                }
            
        </div>
       </div>
  
    {/* REVIEW LIST */}
      <div className='space-y-[15px]'>
          {ReviewsData.map( (review,i)=> (
             <ReviewCard key={i} {...review} active={(active == i)} onclick={()=> setActive(i)}/>
          ))}
      </div>
      <div/>
      
      </div>
  
    
     
      
      
  
      {/* REVIEW DETAILS */}
      <div>
  
          <div className='space-y-[30px]'>
            <h1 className='font-bold text-[30px]'>{activeReview.review.title}</h1>
              <div className='flex justify-start items-center gap-[5px]'>
                {/* REPETITION-ELEMENT-ARRAY BY SHAHRIAR HASAN GITHUB| */}
  
                {
                  Array.from(Array(activeReview.review.stars).keys()).map((el) => <Star key={el}/>)
                }
                
                </div>
  
                  <p className='text-base text-accent max-w-[500px]'>{activeReview.review.details}</p>
          </div>
  
      </div>
    </div>
        
  </section>
  )
 
 
}

export default Review