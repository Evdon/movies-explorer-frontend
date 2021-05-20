import React from 'react';
import { NavLink } from "react-router-dom";

import './LogNavigation.css'

function LogNavigation() {

  return(
    <section className='log-navigation'>
      <NavLink to='/signup' className='log-navigation__btn'>Регистрация</NavLink>
      <NavLink to='/signin' className='log-navigation__btn log-navigation__btn_fill'>Войти</NavLink>
    </section>
  )
}

export default LogNavigation;