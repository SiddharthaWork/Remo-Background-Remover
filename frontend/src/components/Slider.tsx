
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
        <img src="/image_w_bg.png" style={{ clipPath: `inset(0 ${100.2 - slider}% 0 0)`}} alt="" />
        <img className='absolute top-0 left-0' src="image_wo_bg.png" style={{ clipPath: `inset(0 0 0 ${slider}%  )`}} alt="" />

        <input type="range" min={0} max={100} value={slider} onChange={handlerSlider} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10' />
      </div>
    </div>
  )
}

export default Slider