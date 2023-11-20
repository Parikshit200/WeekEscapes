import React from 'react'
import {AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai';
import { GoPaperAirplane } from "react-icons/go";
const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <GoPaperAirplane size={29} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>WEEKESCAPES</h1>
        </div>
        <div className='flex'>
        <div className='hidden md:flex items-center px-6 '>
            <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
            <p className='text-sm text-gray-700'>8AM - 7PM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
            <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
            <p className='text-sm text-gray-700'>999-278-9571</p>
        </div>
        <button>Get a Quote</button>
        </div>
    </div>
  )
}

export default TopBar