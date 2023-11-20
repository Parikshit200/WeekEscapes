import React from 'react'

const Activites = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img
            className='w-full h-full object-cover relative border-4  border-white shadow-lg' 
            src = "https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt= ""/>
        </div>
        <div className='relative p-6 ' >
            <h3 className='absolute z-10 top-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img 
            className='w-full h-full object-cover relative border-4  border-white shadow-sm'
            src = "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt= ""/>
        </div>
        <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img 
            className='w-full h-full object-cover relative border-4  border-white shadow-sm'
            src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt= ""/>
        </div>
    </div>
  )
}

export default Activites