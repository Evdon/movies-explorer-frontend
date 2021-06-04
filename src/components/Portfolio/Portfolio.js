import React from 'react';

import './Portfolio.css';

function Portfolio() {

  return(
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a href='https://github.com/Evdon/how-to-learn' className='portfolio__link' target='_blank' rel='noreferrer'>Статичный сайт</a>
          <a href='https://github.com/Evdon/how-to-learn' className='portfolio__link-arrow' target='_blank' rel='noreferrer'>&#8599;</a>
        </li>
        <li className='portfolio__list-item'>
          <a href='https://github.com/Evdon/russian-travel' className='portfolio__link' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
          <a href='https://github.com/Evdon/russian-travel' className='portfolio__link-arrow' target='_blank' rel='noreferrer'>&#8599;</a>
        </li>
        <li className='portfolio__list-item'>
          <a href='https://github.com/Evdon/react-mesto-api-full' className='portfolio__link' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
          <a href='https://github.com/Evdon/react-mesto-api-full' className='portfolio__link-arrow' target='_blank' rel='noreferrer'>&#8599;</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;