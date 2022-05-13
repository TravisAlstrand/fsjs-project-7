import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className='main-nav'>
      <ul>
        <li><NavLink to='/wildlife' onClick={() => props.onSearch('wildlife')}>Wildlife</NavLink></li>
        <li><NavLink to='/beaches' onClick={() => props.onSearch('beaches')}>Beaches</NavLink></li>
        <li><NavLink to='/sunset' onClick={() => props.onSearch('sunset')}>Sunset</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;