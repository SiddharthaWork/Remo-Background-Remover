import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import About from './About'
import { Upload } from 'lucide-react'
const Hero = () => {
    return (
        <div className="relative h-fit md:mb-28  w-full bg-black lg:py-0 py-8">
            <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-[#0a832e]/15 to-transparent z-10"></div>
            <div className='flex flex-col lg:flex-row w-full max-w-6xl p-4 sm:p-6 xl:px-0 lg:py-8 mx-auto gap-6 sm:gap-8 lg:gap-10 min-h-[60vh] h-auto justify-center items-center'>
                <div className='w-full lg:w-2/3 flex flex-col gap-3 sm:gap-4 relative text-center lg:text-left'>
                <div className='absolute -top-8 left-11 md:-top-8 md:left-60 lg:-top-10 lg:left-0'>
                    <Badge variant="secondary" className='text-[#61db3f] rounded-full border text-sm sm:text-md font-sans'>✨ The Most Accurate Background Remover</Badge>
                </div>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
                        Turn Any Photo Into
                        <br />
                        Transparent Image
                    </h1>
                    <p className='text-white/80 text-sm sm:text-lg md:text-xl font-semibold'>
                        Our AI tool removes backgrounds from your — <br />photos  with pixel-perfect precision.
                    </p>
                    <div className='mt-3 sm:mt-4 flex flex-row gap-4 sm:gap-6 items-center sm:items-center justify-center lg:justify-start'>
                        <Button variant="green" className='w-full font-semibold max-w-[12rem] md:max-w-full sm:w-auto md:min-w-[10rem] lg:min-w-[12rem] text-base sm:text-lg md:text-xl py-4 sm:py-5 md:py-6 flex gap-2 px-4 items-center'>
                        <Upload size={36} className="sm:hidden" />
                        <Upload size={44} className="hidden sm:inline-block md:hidden" />
                        <Upload size={52} className="hidden md:inline-block" />
                            Upload your image
                        </Button>
                        <p className='text-white text-base sm:text-lg md:text-sm xl:text-base lg:min-w-[5rem] '>Try it for <br /><span className='font-bold text-xl lg:text-2xl text-[#61db3f]'>Free</span></p>
                    </div>
                </div>
                <div className='bg-white w-full lg:w-2/3 h-48 sm:h-64 md:h-80 lg:h-full max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] rounded-2xl overflow-hidden mt-6 lg:mt-0'>
                    <video autoPlay disablePictureInPicture playsInline loop muted className='w-full h-full object-cover'>
                    <source src='https://storyblok-cdn.photoroom.com/f/191576/x/e866fd84ee/removebackground-animation_h-264.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>  
            <div className="px-2 sm:px-0">
              <About/>
            </div>
        </div>
    )
}

export default Hero