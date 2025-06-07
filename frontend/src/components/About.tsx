import React from 'react'
import { AnimatedTooltipPreview } from './ui/AnimateToolpick'
import { Atoolpick } from './ui/AToolpick'

const About = () => {
  return (
    <div className='w-[64rem] h-[10rem] rounded-2xl mx-auto bg-[#19191b] px-10 flex flex-row items-center justify-center '>
        <div className='grid grid-cols-4 gap-8 place-content-center place-items-center  '>
            <div className='flex-col flex gap-4 items-center justify-center'>
                <div className='flex gap-2'>
                <AnimatedTooltipPreview />
                <h1 className='text-4xl font-bold'>100k+</h1>
                </div>
                <h1 className='text-lg font-semibold'>Background Removed</h1>
            </div>

            <div className='flex-col flex gap-4 items-center justify-center ml-2'>
            <div className='flex gap-2'>
                <Atoolpick />
                <h1 className='text-4xl font-bold'>90k+</h1>
                </div>
                <h1 className='text-lg font-semibold'>Happy Customer</h1>
            </div>

            <div className='flex-col flex gap-4 items-center justify-center'>
                <div className='flex gap-2 items-center'>
            <img src="product.svg" alt="product" />
                <h1 className='text-4xl font-bold flex gap-2 items-center'>5 <span className='text-xl'>⭐</span></h1>
                </div>
                <h1 className='text-lg font-semibold'>Product Hunt</h1>
            </div>

            <div className='flex-col flex gap-4 items-center justify-center'>
                <div className='flex gap-2'>
                <img src="google.svg" alt="" />
                <h1 className='text-4xl font-bold flex items-center gap-2'>4.9 <span className='text-xl'>⭐</span> </h1>
                </div>
                <h1 className='text-lg font-semibold'>Google Rating</h1>
            </div>
        </div>
    </div>
  )
}

export default About