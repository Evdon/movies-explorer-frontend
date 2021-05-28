import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavigationAuth from '../NavigationAuth/NavigationAuth';

import './Header.css';

function Header(props) {
  const { path, isOpen, onClose, onOpen } = props;

  const currentUser = useContext(CurrentUserContext);

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
        {currentUser.loggedIn
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