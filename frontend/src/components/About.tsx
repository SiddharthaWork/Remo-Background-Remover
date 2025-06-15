import React from 'react'
import { AnimatedTooltipPreview } from './ui/AnimateToolpick'
import { Atoolpick } from './ui/AToolpick'

const About = () => {
  return (
    <div className='w-full px-8'>
      <div className='w-full max-w-6xl md:py-0 py-8 h-auto md:h-[10rem] rounded-2xl mx-auto bg-black/10 text-black dark:bg-[#19191b] dark:text-white px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-center transition-colors'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full place-content-center place-items-center'>
          <div className='flex-col flex gap-2 md:gap-4 items-center justify-center'>
            <div className='flex gap-2 items-center'>
              <AnimatedTooltipPreview />
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>100k+</h1>
            </div>
            <h1 className='text-base sm:text-lg font-semibold text-center'>Background Removed</h1>
          </div>

          <div className='flex-col flex gap-2 md:gap-4 items-center justify-center sm:ml-2'>
            <div className='flex gap-2 items-center'>
              <Atoolpick />
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>90k+</h1>
            </div>
            <h1 className='text-base sm:text-lg font-semibold text-center'>Happy Customer</h1>
          </div>

          <div className='flex-col flex gap-2 md:gap-4 items-center justify-center'>
            <div className='flex gap-2 items-center'>
              <img src="product.svg" alt="product" className='w-6 h-6 md:w-auto md:h-auto' />
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold flex gap-2 items-center'>5 <span className='text-lg sm:text-xl'>⭐</span></h1>
            </div>
            <h1 className='text-base sm:text-lg font-semibold text-center'>Product Hunt</h1>
          </div>

          <div className='flex-col flex gap-2 md:gap-4 items-center justify-center'>
            <div className='flex gap-2 items-center'>
              <img src="google.svg" alt="" className='w-6 h-6 md:w-auto md:h-auto' />
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2'>4.9 <span className='text-lg sm:text-xl'>⭐</span> </h1>
            </div>
            <h1 className='text-base sm:text-lg font-semibold text-center'>Google Rating</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About