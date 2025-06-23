import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation()
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <header className={`absolute w-full ${location.pathname == '/gallery' && 'bg-[#121118]'} z-10`}>
        <nav className="flex justify-between items-center py-3 px-6 md:px-20 top-0 z-50">
          <div className="text-2xl font-bold text-orange-600">
            <Link to='/'><img className='w-[200px] invert-[1]' src={logo} alt="logo" /></Link>
          </div>
          <div onClick={toggleDrawer} className="cursor-pointer text-[40px] text-white">&#9776;</div>
        </nav>
      </header>

      {/* Full Screen Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#95b6bb] transition-all duration-300 ease-in-out flex flex-col">
          {/* Close Button */}
          <div className="absolute top-4 left-4 text-white text-[40px] cursor-pointer z-50" onClick={closeDrawer}>
            &times;
          </div>

          {/* Logo Center Left */}
          <div className="absolute top-[10%] left-[25%] md:top-[20%] md:left-[10%]">
            <img src={logo} alt="logo" className="w-[200px]" />
          </div>

          {/* Centered Menu Items */}
          <div className="flex-1 flex flex-col font-semibold justify-center items-center space-y-6 text-white text-3xl tracking-wide">
            <Link className='hover:text-black' to="/" onClick={closeDrawer}>HOME</Link>
            <Link className='hover:text-black' to="/about" onClick={closeDrawer}>ABOUT</Link>
            <Link className='hover:text-black' to="/event" onClick={closeDrawer}>EVENTS</Link>
            <Link className='hover:text-black' to="/menu_250420_142636[1].pdf" target="_blank" rel="noopener noreferrer">MENU</Link>
            {/* <Link className='hover:text-black' to="/catering menu_250420_142610.pdf" target="_blank" rel="noopener noreferrer">CATERING</Link> */}
            <Link className='hover:text-black'  onClick={closeDrawer} to="/catering">CATERING</Link>
            <Link className='hover:text-black' to="/gallery" onClick={closeDrawer}>GALLERY</Link>
            <Link className='hover:text-black' to="/contact" onClick={closeDrawer}>CONTACT</Link>
            <button className="bg-white text-[#95b6bb] px-6 py-2 text-xl mt-4 rounded">
              0298327770
            </button>
          </div>

          {/* Optional: Background design using absolute positioned floral PNG or SVG */}
          {/* <img src="/path-to-floral.png" className="absolute top-0 right-0 w-[300px] opacity-70" alt="design" /> */}
        </div>
      )}
    </>
  );
};

export default Header;
