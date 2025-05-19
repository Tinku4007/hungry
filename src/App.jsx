import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routing/routing'

function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
