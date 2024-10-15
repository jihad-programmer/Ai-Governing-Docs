import React from 'react'
import Container from '../common/Container'
import ProblemSolutionHeader from './ProblemSolutionHeader'
import ProblemSolutionCard from './ProblemSolutionCard'
import { ProblemSolutionsData } from '../../lib/Db'
function ProblemSolution() {
  return (
    <section>

       <Container className='pt-32'>
            <ProblemSolutionHeader/>
            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-[30px]'>
                
                  {ProblemSolutionsData.map((problem,i)=> (
                       <ProblemSolutionCard {...problem} key={i}/>
                  ))}
                  
                 
            </div>
       </Container>

    </section>
  )
}

export default ProblemSolution