import React from 'react';
import { useState } from 'react';
import netflixLogo from '../assets/Netflix-Logo.svg';

const Navbar = () => {
  const [languange, setLanguange] = useState();

  function changeLanguange() {
    setLanguange(e.target.value);
  }
  return (
    <header className='flex items-center justify-between px-5 w-full absolute  bg-transparent z-50 md:pl-5'>
      <div>
        <img src={netflixLogo} className='w-32 p-0 md:ml-7 md:w-40'></img>
      </div>
      <nav className='flex items-center gap-5  md:gap-7 md:w-3/12 md:h-10 '>
        <select onChange={(changeLanguange = {})} className='border border-white rounded-sm bg-transparent py-1 pr-5 font-roboto text-white text-md md:w-6/12 md:-10 '>
          <option languange='english'>English</option>
          <option languange='indonesia'>Indonesia</option>
          <option languange='japan'>Japan</option>
          <option languange='spain'>Spain</option>
        </select>
        <button className='bg-red-600 px-4 py-1.5 rounded-sm text-white font-roboto md:text-md'>Sign In</button>
      </nav>
    </header>
  );
};

export default Navbar;
