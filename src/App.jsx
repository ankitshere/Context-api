import React from 'react'
import Mainrouters from './routes/Mainrouters'
import Navbar from './Navbar'


const App = () => {
  return (
   <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50">
  <div className="px-20 py-6 bg-white shadow-sm border-b border-gray-100">
    <Navbar />
  </div>
  <div className="px-20 py-10">
    <Mainrouters />
  </div>

</div>
  )
}

export default App
