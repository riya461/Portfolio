import { useState, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Experience from './components/Experience';
import houseicon from '/assets/house.svg';

const App = () => {
  
  return (
    <div className="bg-background min-h-screen">
      
      <main>
      <button
        className={` p-2 bg-secondary flex justify-center header border-2 border-secondary `}
        
      >
        <a href="#home">
        <img src={houseicon} alt="Menu" className="w-8 h-8 " /> {/* Replace with your house icon */}
        </a>
      </button>
        <a id="home" href="#home"><Home /></a>
        
        <a id="projects" href="#projects"><Projects /></a>
        <a href="#experience" id="experience"><Experience/></a>

        <a id="blogs" href="#blogs"><Blogs /></a>
        <a id="about" href="#about"><About /></a>
        
        <a id="connect" href="#connect"><Connect /></a>
      </main>
      <footer className="bg-primary font-head text-background text-center p-4 mt-8">
        <p>&copy; 2024 Riya Sabu. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
