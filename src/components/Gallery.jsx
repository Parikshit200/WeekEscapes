import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-5'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1584132869994-873f9363a562?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
            <div>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Gallery