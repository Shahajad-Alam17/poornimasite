import React from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Home/Nav'
import About from './About/About';
import Footer from './Footer';

const App = () => {
  return (
    <div className='bg-[#f0f0f2]'>
     <Router>
          <div className="min-h-screen flex flex-col justify-between max-w-[1800px] mx-auto overflow-hidden">
            <Nav />
            <main className="flex-grow">
              {/* Ensure the main content area grows and pushes the footer to the bottom */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
               
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    </div>
  )
}

export default App
