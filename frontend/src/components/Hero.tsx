import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
const Hero = () => {
    return (
        <div className="relative h-screen w-full bg-black">
            <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-[#0a832e]/15 to-transparent z-10"></div>
            <div className='w-2/3 p-8 mx-auto gap-10 h-1/2 justify-center flex items-center'>
                <div className='w-2/3 flex flex-col gap-4 relative'>
                <div className='absolute -top-10 '>
                    <Badge variant="secondary" className='text-[#61db3f] rounded-full border text-md font-sans'>✨ The Most Accurate Background Remover</Badge>
                </div>
                    <h1 className='text-5xl font-bold text-white'>
                        Turn Any Photo Into
                        <br />
                        Transparent Image
                    </h1>
                    <p className='text-white/80 text-lg font-semibold'>
                        Our AI tool removes backgrounds from your photos <br /> with pixel-perfect precision.
                    </p>
                    <div className='mt-4 flex gap-6 items-center'>
                        <Button variant="green" className='md:w-[12rem] text-xl py-6 flex gap-4 items-center'>Get Started
                            <ChevronRight />
                        </Button>
                        <p>Try it for <br /><span className='font-bold text-2xl text-[#61db3f]'>Free</span></p>
                    </div>
                </div>
                <div className='bg-white'>
                    <img src="hero.png" alt="" className='w-1/2 h-1/2' />
                </div>

            </div>
        </div>
    )
}

export default Hero