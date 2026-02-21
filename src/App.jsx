import React from 'react'
import Mainrouters from './routes/Mainrouters'
import Navbar from './Navbar'


const App = () => {
  return (
    <div className='bg-rose-500 w-scren h-screen px-20 text-white  py-5'>
      <Navbar/>
      <Mainrouters/>
    </div>
  )
}

export default App
