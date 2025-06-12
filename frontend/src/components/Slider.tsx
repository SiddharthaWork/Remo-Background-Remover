'use client'
import React from 'react'
import { useState } from 'react'

const Slider = () => {
 

  const [slider, setSlider] = useState(50)
  const handlerSlider = (e: any) => {
    setSlider(e.target.value)
  } 

  return (
    <div>
      <h1 className='text-5xl font-bold mt-10 text-center'>Remove Background with <br /> <span className='text-[#61db3f]'>100% </span> Accuracy</h1>

      {/* Image */}
      <div className='w-4xl rounded-xl mx-auto mt-10 relative overflow-hidden'>
        <img src="/image_w_bg.png" className='border-r-0 border-white outline-none' style={{ clipPath: `inset(0 ${100.2 - slider}% 0 0)`}} alt="" />
        <img className='absolute top-0 left-0 border-l-0 border-white outline-none h-full' src="image_wo_bg.png"  style={{ clipPath: `inset(0 0 0 ${slider}%  )`}} alt="" />
      {/* Slider */}
        <input type="range" value={slider} onChange={handlerSlider} min={0} max={100}
        className='absolute w-full top-1/2 left-1/2 transform -translate-x-[52%] -translate-y-1/2 z-10 slider bg-black outline-none' />
      </div>
    </div>
  )
}

export default Slider