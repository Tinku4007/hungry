import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, useLocation } from 'react-router-dom'
import { route } from './routing/routing'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './hooks/ScrollToTop'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
    });
  }, []);

  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer />
    </>
  )
}

export default App
