import React from 'react'
import { Link } from 'react-router-dom'

const PNF = () => {
  return (
    <div className=' text-center items-center justify-center  p-15 w-full h-full '>
        <h1 className='text-center  text-9xl font-bold text-orange-600'>4<span>😋</span>4</h1>
        <h2 className='text-center  text-4xl p-4 text-orange-400 font-mono'>Page Not Found</h2>
      <p className="text-gray-500 text-sm sm:text-base text-center ">
  Page not found. The page you’re looking for doesn’t exist or has been moved.
</p>
<div className='mt-5'>
    <Link
  to="/"
  className="bg-orange-500 hover:bg-orange-600 mb-3 mt-2 text-white px-6 py-2  rounded-full transition "
>
  Home Page →
</Link>
</div>
    </div>
  )
}

export default PNF