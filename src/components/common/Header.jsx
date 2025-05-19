import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center">
        <div>📍 267 5th Avenue, New York, USA</div>
        <div>Support@site.com | +01 2023 555 0103</div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-20 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-orange-600">Hungry</div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <li><Link href="/" className="hover:text-orange-600 transition">Home</Link></li>
          <li><Link to='/about' className="hover:text-orange-600 transition">About</Link></li>
          <li><Link to="/menu_250420_142636[1].pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">Menu</Link></li>
          {/* <li><a href="#" className="hover:text-orange-600 transition">Our History</a></li> */}
          {/* <li><Link  className="hover:text-orange-600 transition">Blog</Link></li> */}
          <li><Link to='/contact' href="#" className="hover:text-orange-600 transition">Contact</Link></li>
        </ul>
        <div className="hidden md:block bg-orange-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-orange-700 transition">Find a table</div>
        <div className="md:hidden cursor-pointer text-gray-600">&#9776;</div>
      </nav>
      </>
  )
}

export default Header