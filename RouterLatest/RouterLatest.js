// npm install react-router-dom@latest
import React from 'react'
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Apple from './Apple';
import Nopage from './Nopage';
import Layout from './Layout';



export default function RouterLatest() {
  return (
    <div>
      <h1>RouterV5</h1>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/apple' element={<Apple />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/nopages' element={<Nopage />} />
          <Route path='/layout' element={<Layout />} />
        </Routes>
      </Router>
    </div>
  )
}
