import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavigationAuth from '../NavigationAuth/NavigationAuth';

import './Header.css';

function Header(props) {
  const { path, isOpen, onClose, onOpen, loggedIn } = props;

  const headerClasses = `header ${
    (path === '/') ? 'header__main' : ''
  } ${
    (path === '/signin' || path === '/signup')
    ? 'header__hiden'
    : ''
  }`

  return(
    <header className={headerClasses}>
      <div className='header__area'>
        <NavLink to='/' className='header__logo'></NavLink>
        {loggedIn
          ? <NavigationAuth
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
            />
          : <Navigation
        />}
      </div>
    </header>
  );
}

export default Header;