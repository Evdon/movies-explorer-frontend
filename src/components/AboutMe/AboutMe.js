import React from 'react';
import me from '../../images/me.jpg';

import './AboutMe.css';

function AboutMe() {

  return(
    <section className='aboutMe'>
      <h2 className='aboutMe__title'>Студент</h2>
      <div className='aboutMe__area'>
        <div className='aboutMe__info'>
          <h3 className='aboutMe__name'>Петя</h3>
          <p className='aboutMe__jobAge'>Деловая колбаса, 21 год</p>
          <p className='aboutMe__about'>На данный момент живу и учусь в Волгограде. Люблю Яндекс. Холост.</p>
          <ul className='aboutMe__links-area'>
            <li><a href='https://www.facebook.com/yandex/' className='aboutMe__link' target='_blank' rel='noreferrer'>Facebook</a></li>
            <li><a href='https://github.com/Evdon' className='aboutMe__link' target='_blank' rel='noreferrer'>Git</a></li>
          </ul>
        </div>
        <img src={me} alt='me' className='aboutMe__img'></img>
      </div>
    </section>
  );
}

export default AboutMe;