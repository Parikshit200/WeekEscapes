import React from 'react'
import { GoPaperAirplane } from "react-icons/go";
const Footer = () => {
  return (
   
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
    <div className='flex items-center m-auto justify-center'>
        <GoPaperAirplane size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold'>WEEKESCAPES</h1>
    </div>
    </div>
   
  )
}

export default Footer