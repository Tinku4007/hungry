import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpne] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpne(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpne(false)
  }

  return (
    <>
      <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center">
        <div>📍 56/16 Victoria Ave, Castle Hill, Sydney, NSW, Australia, 2154</div>
        <div>info@hudsongeorge.com.au | +61 2 9194 3288</div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-20 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-orange-600">
          HUDSON GEORGE
          {/* <Link to='/'><img className='absolute h-[150px] top-20' src='https://www.hudsongeorge.com.au/wp-content/uploads/2019/12/logo.png' alt="" /></Link> */}
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <li><Link href="/" className="hover:text-orange-600 transition">Home</Link></li>
          <li><Link to='/about' className="hover:text-orange-600 transition">About</Link></li>
          <li><Link to='/event' className="hover:text-orange-600 transition">Event</Link></li>
          <li><Link to="/menu_250420_142636[1].pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">Menu</Link></li>
          <li><Link to="/catering menu_250420_142610.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">Catering</Link></li>
          <li><Link to="#" className="hover:text-orange-600 transition">Gallery</Link></li>
          {/* <li><a href="#" className="hover:text-orange-600 transition">Our History</a></li> */}
          {/* <li><Link  className="hover:text-orange-600 transition">Blog</Link></li> */}
          <li><Link to='/contact'  className="hover:text-orange-600 transition">Contact</Link></li>
        </ul>
        <div className="hidden md:block bg-orange-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-orange-700 transition">BOOK ONLINE</div>
        <div onClick={toggleDrawer} className="md:hidden cursor-pointer text-gray-600">&#9776;</div>
      </nav>

      {isDrawerOpen && (
        <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 px-6 py-4 transition-all">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-orange-600">Hungry</div>
            <button onClick={closeDrawer} className="text-2xl text-gray-600">&times;</button>
          </div>
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-600">
            <li><Link to="/" onClick={closeDrawer} className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/about" onClick={closeDrawer} className="hover:text-orange-600">About</Link></li>
            <li><Link to="/menu_250420_142636[1].pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">Menu</Link></li>
            <li><Link to="/catering menu_250420_142610.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition">Catering</Link></li>
            <li><Link to="#" className="hover:text-orange-600 transition">Gallery</Link></li>
            <li><Link to="/contact" onClick={closeDrawer} className="hover:text-orange-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header