import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout