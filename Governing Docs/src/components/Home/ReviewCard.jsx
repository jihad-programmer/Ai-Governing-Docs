import React from 'react'
import { cn } from '../../lib/utils'

function ReviewCard({name,image,type,active,onclick}) {
  return (
    <>
          <button onClick={onclick} className={cn('inline-flex justify-start items-center border-primary rounded-[20px] border w-full lg:w-[400px] xl:w-[491px] py-[1] px-5 gap-[13px]', active && "bg-gradient-primary")}>


                <img src={image} alt={name} className='rounded-full'/>
                <div className={cn('font-semibold text-base text-accent', active && "text-white")}>
                     <h4>{name}</h4>
                     <p>{type}</p>
                </div>

             </button>
    </>
  )
}

export default ReviewCard