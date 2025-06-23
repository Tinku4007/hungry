import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import ScrollToTop from '../hooks/ScrollToTop'

const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout