import React from 'react'
import Weekescapes from '../assets/Weekescapes.mp4';
const Hero = () => {
  return (
    <div>
        <video src={Weekescapes} autoPlay loop muted  className='object-fit:cover relative'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-gray-700  p-4'>
                <h1 className='font-bold text-4xl '>Find Your Special Trip</h1>
                <h2 className=' flex text-4xl py-4 italic'>With Weekescapes</h2>
                <p className=''>At WeekEscapes, we believe that travel is not just about reaching a destination; it's about the journey and the memories you create along the way. Start your adventure with us and let WeekEscapes be your companion in crafting the perfect escape.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
//images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D