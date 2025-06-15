import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'

const Landing = () => {
  return (
    <div className='dark:bg-black bg-white'>
        <Navbar/>
        <Hero/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Landing