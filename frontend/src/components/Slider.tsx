'use client'
import React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'
import { MousePointerClick } from 'lucide-react'
const Slider = () => {
  const [slider, setSlider] = useState(50)
  const handlerSlider = (e: any) => {
    setSlider(e.target.value)
  }

  return (
    <div className="w-full px-2 sm:px-4 md:px-0">
      <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold mt-8 sm:mt-10 text-center'>Clean cuts, seamless results<br /><span className='text-[#61db3f]'>100% </span> Accuracy</h1>

      {/* Image */}
      <div className='w-full max-w-2xl md:max-w-6xl rounded-xl mx-auto mt-8 sm:mt-10 relative overflow-hidden aspect-[16/9] bg-black'>
        <img src="/image_w_bg.png" className='border-r-0 border-white outline-none w-full h-full object-cover' style={{ clipPath: `inset(0 ${100.2 - slider}% 0 0)` }} alt="" />
        <img className='absolute top-0 left-0 border-l-0 border-white outline-none w-full h-full object-cover' src="image_wo_bg.png" style={{ clipPath: `inset(0 0 0 ${slider - 0.5}% )` }} alt="" />
        {/* Slider */}
        <input type="range" value={slider} onChange={handlerSlider} min={0} max={101}
          className='absolute w-11/12 sm:w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 slider bg-black outline-none' />
      </div>
      <div className='flex justify-center items-center my-10'>
      <Button variant="green" className='w-full font-semibold max-w-[12rem] md:max-w-full sm:w-auto md:min-w-[10rem] lg:min-w-[12rem] text-base sm:text-lg md:text-xl py-4 sm:py-5 md:py-6 flex gap-2 px-4 items-center'>
        <MousePointerClick  size={36} className="sm:hidden"/>
        <MousePointerClick size={44} className="hidden sm:inline-block md:hidden" />
        <MousePointerClick  size={52} className="hidden md:inline-block"/>
        Start for Free
      </Button>
      </div>
    </div>
  )
}

export default Slider