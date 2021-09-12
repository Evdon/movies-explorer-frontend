import React from 'react';

import './AboutProject.css';

function AboutProject() {

  return(
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__cards'>
        <div className='aboutProject__card'>
          <h3 className='aboutProject__card_title'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__card_text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutProject__card'>
          <h3 className='aboutProject__card_title'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__card_text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutProject__bar'>
        <div className='aboutProject__bar_back'>1 неделя</div>
        <div className='aboutProject__bar_front'>4 недели</div>
        <p className='aboutProject__back-description'>Back-end</p>
        <p className='aboutProject__front-description'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;