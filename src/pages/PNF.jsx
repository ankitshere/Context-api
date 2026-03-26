import React from 'react'
import { Link } from 'react-router-dom'

const PNF = () => {
  return (
    <div className='min-h-screen w-full flex flex-col text-center items-center justify-center px-4 sm:px-6 py-12 -mt-20 sm:-mt-16 md:-mt-12'>

      <h1 className='text-7xl sm:text-8xl md:text-9xl font-bold text-orange-600 select-none cursor-default'>
        4<span>😋</span>4
      </h1>

      <h2 className='text-2xl sm:text-3xl md:text-4xl p-4 text-orange-400 font-mono'>
        Page Not Found
      </h2>

      <p className="text-gray-500 text-sm sm:text-base text-center max-w-md">
        Page not found. The page you're looking for doesn't exist or has been moved.
      </p>

      <div className='mt-5'>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 mt-2 text-white px-6 py-2 rounded-full transition"
        >
          Home Page →
        </Link>
      </div>

    </div>
  )
}

export default PNF