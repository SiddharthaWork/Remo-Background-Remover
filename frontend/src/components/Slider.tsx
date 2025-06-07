
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
      <div>
        <img src="https://media.architecturaldigest.com/photos/637949b3407644b8cdc8947f/16:9/w_2560%2Cc_limit/1442809583" style={{ clipPath: `inset(0 ${100.2 - slider}% 0 0)`}} alt="" />
        <img src="https://w7.pngwing.com/pngs/83/423/png-transparent-messi-thumbnail.png" style={{ clipPath: `inset(0 0 0 ${slider}%  )`}} alt="" />

        <input type="range" min={0} max={100} value={slider} onChange={handlerSlider} className='w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700' />
      </div>
    </div>
  )
}

export default Slider