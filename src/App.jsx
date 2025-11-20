import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar.jsx';
import { Home } from './Pages/Home.jsx';
import { Certifications } from './Pages/Certifications.jsx';
import Contact from './Pages/Contact.jsx';
import Projects from './Pages/Projects.jsx';

function App() {


  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </Router>

    </>




  )
}

export default App
