import React from 'react';
import { useState } from 'react';

const Header = () => {
    
  return (
    <header className="flex flex-row items-center  p-0 w-full justify-center ">
      

      <nav className='flex relative top-5 justify-center items-center'>
  <ul className="flex space-x-7 bg-white sm:text-2xl sm:space-x-10 md:space-x-20 rounded-xl justify-center items-center py-2 px-16 font-head uppercase">
    <li className="hover:underline">
      <a href="#home">Home</a>
    </li>
  
    <li className="hover:underline">
      <a href="#projects">Projects</a>
    </li>
    <li className="hover:underline">
      <a href="#blogs">Blogs</a>
    </li>
    <li className="hover:underline">
      <a href="#about">About</a>
    </li>
    <li className="hover:underline">
      <a href="#connect">Connect</a>
    </li>
  </ul>
</nav>



      
    </header>
  );
};

export default Header;
