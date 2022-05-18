import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = (props) => {

  return (
    <nav className='main-nav'>
      <ul>
        <li><NavLink to='/wildlife' onClick={() => props.onSelect('wildlife')}>Wildlife</NavLink></li>
        <li><NavLink to='/beaches' onClick={() => props.onSelect('beaches')} >Beaches</NavLink></li>
        <li><NavLink to='/sunset' onClick={() => props.onSelect('sunset')}>Sunset</NavLink></li>
      </ul>
    </nav>
  );
}

export default withRouter(Nav);