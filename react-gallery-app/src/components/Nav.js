import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li><NavLink to='/wildlife'>Wildlife</NavLink></li>
        <li><NavLink to='/beaches'>Beaches</NavLink></li>
        <li><NavLink to='/sunset'>Sunset</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;