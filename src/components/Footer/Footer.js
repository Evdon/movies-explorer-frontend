import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

function Footer({ path }) {

  const footerHiden = `footer ${
    (path === '/profile' || path === '/signin' || path === '/signup')
    ? 'footer__hiden'
    : ''
  }`

  return(
    <section className={footerHiden}>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2021</p>
        <ul class='footer__list'>
          <li className='footer__list-item'><NavLink to='https://praktikum.yandex.ru' className='footer__link'>Яндекс.Практикум</NavLink></li>
          <li className='footer__list-item'><NavLink to='https://github.com/Evdon' className='footer__link'>Github</NavLink></li>
          <li className='footer__list-item'><NavLink to='https://www.facebook.com/yandex/' className='footer__link'>Facebook</NavLink></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;