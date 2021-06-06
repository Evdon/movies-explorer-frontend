import React from 'react';
import logo from '../../images/promo_logo.svg';

import './Promo.css';

function Promo() {

  return(
    <section className='promo'>
      <div className='promo__area'>  
        <div className='promo__section'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href='https://github.com/Evdon/movies-explorer-frontend/tree/level-3' className='promo__btn' target='_blank' rel='noreferrer' >Узнать больше</a>
        </div>
        <img src={logo} alt='promo logo' className='promo__logo'></img>
      </div>
    </section>
  )
}

export default Promo;
