import React from 'react'
import SectionTitle from '../common/SectionTitle'

function ProblemSolutionHeader() {
  return (
    <div className='flex justify-between items-center gap-4'>
        <SectionTitle gradient='Solution' className=''>Problem & </SectionTitle>
        <div className='flex justify-center items-center gap-1 md:gap-[15px]'>
            <button>
                <img src="/Frame-237.png" alt="" />
            </button>
            <button>
                <img src="/Frame-226.png" alt="" />
            </button>
           
        </div>
    </div>
  )
}

export default ProblemSolutionHeader