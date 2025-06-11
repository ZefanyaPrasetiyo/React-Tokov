import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landingpage } from './page/landingPage'
import { Login } from './page/LoginPage'
import { Register } from './page/RegisterPage'
import { Homepage } from './page/Homepage'
import { Detail } from './page/DetailPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Registerpage" element={<Register/>}/>
        <Route path="/Loginpage" element={<Login/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
