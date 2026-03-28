import React from 'react'
import Mainrouters from './routes/Mainrouters'
import Navbar from './Navbar'


const App = () => {
  return (
   <div className="min-h-screen bg-linear-to-br ">
  <div className=" bg-white shadow-sm border-b border-gray-100">
    <Navbar />
  </div>
  <div className="">
    <Mainrouters />
  </div>

</div>
  )
}

export default App
