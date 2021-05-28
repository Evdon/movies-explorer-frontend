import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

function Navigation() {

  return(
    <nav className='navigation'>
      <NavLink to='/signup' className='navigation__link'>Регистрация</NavLink>
      <NavLink to='/signin' className='navigation__link navigation__link_fill'>Войти</NavLink>
    </nav>
  )
}

export default Navigation;