import React from 'react';
import { NavLink } from 'react-router-dom';

import './Portfolio.css';

function Portfolio() {

  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <NavLink to='https://github.com/Evdon/how-to-learn' className='portfolio__link'>Статичный сайт</NavLink>
          <NavLink to='https://github.com/Evdon/how-to-learn' className='portfolio__link-arrow'>&#8599;</NavLink>
        </li>
        <li className='portfolio__list-item'>
          <NavLink to='https://github.com/Evdon/russian-travel' className='portfolio__link'>Адаптивный сайт</NavLink>
          <NavLink to='https://github.com/Evdon/russian-travel' className='portfolio__link-arrow'>&#8599;</NavLink>
        </li>
        <li className='portfolio__list-item'>
          <NavLink to='https://github.com/Evdon/react-mesto-api-full' className='portfolio__link'>Одностраничное приложение</NavLink>
          <NavLink to='https://github.com/Evdon/react-mesto-api-full' className='portfolio__link-arrow'>&#8599;</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;