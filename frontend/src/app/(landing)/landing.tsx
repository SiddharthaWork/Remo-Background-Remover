import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Slider from '@/components/Slider'

const Landing = () => {
  return (
    <div className=' bg-black'>
        <Navbar/>
        <Hero/>
        <Slider/>
    </div>
  )
}

export default Landing