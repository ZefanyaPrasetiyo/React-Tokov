import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landingpage } from './page/landingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
