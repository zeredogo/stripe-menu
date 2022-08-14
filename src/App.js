import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
      <p className="footer"><small>Krypto Zone &copy; 2022</small></p>
    </>
  )
}

export default App
