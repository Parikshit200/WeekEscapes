
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-700'>We're standing by!</p>
        <div className='grid mf:grid-cols-2 '>
            <img
             src='https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt=''
            className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-lg'
            />
            <form>
                <div className='grid grid-cols-2'>
                    <input  className = 'border m-2 p-2 rounded-md'type='text' placeholder='First' />
                    <input  className = 'border m-2 p-2 rounded-md'type='text' placeholder='Last'/>
                    <input  className = 'border m-2 p-2 rounded-md'type='email' placeholder='Email'/>
                    <input  className = 'border m-2 p-2 rounded-md'type='tel' placeholder='Phone'/>
                    <input  className = 'border m-2 p-2 rounded-lg col-span-2'type='text' placeholder='Address'/>
                    <textarea className='border col-span-2 m-2 p-2 rounded-xl' cols={30} rows={10}></textarea>
                    <button>Sumbit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
// https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D