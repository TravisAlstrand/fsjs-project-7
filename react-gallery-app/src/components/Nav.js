import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className='main-nav'>
      <ul>
        <li><NavLink exact to='/' onClick={props.onClick('wildlife')}>Wildlife</NavLink></li>
        <li><NavLink to='/beaches' onClick={props.onClick('beaches')}>Beaches</NavLink></li>
        <li><NavLink to='/sunset' onClick={props.onClick('sunset')}>Sunset</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;