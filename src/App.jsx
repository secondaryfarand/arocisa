import React from 'react'
import { Routes, Route } from 'react-router-dom';

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Landing from './pages/Landing/Landing';
import TiltCard from "./components/Tilt/TiltCard"; 

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tilt" element={<TiltCard />} />


        {/* <Route path="/anatomi" element={<Menu />} />
        <Route path="/anatomi/:id" element={<AnatomiOrgan />} />
        <Route path="/kuis" element={<Kuis />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modul" element={<ModuleStudy />} />
        <Route path="/modul/:moduleId" element={<ModuleStudy />} /> */}
      </Routes>
    </>
  )
}


export default App
