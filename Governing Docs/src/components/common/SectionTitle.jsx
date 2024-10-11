import React from 'react'
import { cn } from '../../lib/utils'
import GradientText from './GradientText'


function SectionTitle({children, className , gradient}) {
  return (
    <h1 className={cn('font-space-grotesk font-bold text-2xl md:text-[35px] lg:text-[46px]', className)}>

        {children} <GradientText>{gradient}</GradientText>

    </h1>
  )
}

export default SectionTitle