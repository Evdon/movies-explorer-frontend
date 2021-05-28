import React from 'react';

import './Techs.css';

function Techs() {

  return(
    <section className='techs'>
      <h2 className='techs__title'>технологии</h2>
      <p className='techs__subtitle'>7 технологий</p>
      <p className='tecchs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <li className='techs__list-item'>
          <p className='techs__list-text'>HTML</p>
        </li>
        <li className='techs__list-item'>
          <p className='techs__list-text'>CSS</p>
        </li>
        <li className='techs__list-item'>
          <p className='techs__list-text'>JS</p>
        </li>
        <li className='techs__list-item'>
          <p className='techs__list-text'>React</p>
        </li>
        <li className='techs__list-item'>
          <p className='techs__list-text'>Git</p>
        </li>
        <li className='techs__list-item'>
          <p className='techs__list-text'>Express.js</p>
        </li>
        <li className='techs__list-item'>
          <p className='techs__list-text'>mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;