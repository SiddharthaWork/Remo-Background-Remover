"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './modeToggle'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

const Navbar = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className='w-full h-[4rem] border-b-2 border-border/40 flex items-center justify-between px-8 overflow-hidden'>
      <Link href="/">
        <img 
          src={mounted && theme === 'dark' ? "/logo-dark.png" : "/logo-white.png"} 
          alt="logo" 
          className='w-24 h-24' 
        />
      </Link>

      <div className='flex items-center gap-4'>
        <ModeToggle />
    
        <Button variant="green">
          Login
        </Button>
      </div>
    </div>
  )
}

export default Navbar