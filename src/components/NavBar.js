import React from 'react';
import './css/NavBar.css';
import {Link} from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav className='navBar'>
      <ul className="navBar_menu">
        <li className="navbar_li">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar_li">
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="navbar_li">
          <Link to="/resume">RESUME</Link>
        </li>
        <li className="navbar_li">
          <Link to="/csseffects">CSS EFFECTS</Link>
        </li>
      </ul>
    </nav>
  )
}
