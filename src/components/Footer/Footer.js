import React from 'react';

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
          <li className='footer__list-item'><a href='https://praktikum.yandex.ru' className='footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
          <li className='footer__list-item'><a href='https://github.com/Evdon' className='footer__link' target='_blank' rel='noreferrer'>Github</a></li>
          <li className='footer__list-item'><a href='https://www.facebook.com/yandex/' className='footer__link' target='_blank' rel='noreferrer'>Facebook</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;