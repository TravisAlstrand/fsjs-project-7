import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className='main-nav'>
      <ul>
        <li><NavLink exact to='/'>Wildlife</NavLink></li>
        <li><NavLink to='/beaches'>Beaches</NavLink></li>
        <li><NavLink to='/sunset'>Sunset</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;