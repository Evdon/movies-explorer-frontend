import React from 'react';
import LogNavigation from '../LogNavigation/LogNavigation'

import './Header.css';

function Header() {

  return(
    <header className='header'>
      <a href='/' className='header__logo'></a>
      <LogNavigation />
    </header>
  );
}

export default Header;