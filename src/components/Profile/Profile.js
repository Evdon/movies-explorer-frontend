import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='profile'>
      <form className='profile__form'>
        <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
        <div className='profile__input-list'>
          <div className='profile__input-area'>
            <label className='profile__label'>Имя</label>
            <input 
              className='profile__input'
              placeholder='Петя'
              minLength='2'
              maxLength='30'
            />
          </div>
          <div className='profile__input-area'>
            <label className='profile__label'>E-mail</label>
            <input
              className='profile__input'
              placeholder={currentUser.email}
              type='email'
              name='email'
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b">
            </input>
          </div>
        </div>
        <button type='submit' className='profile__submit-btn'>Редактировать</button>
        <NavLink to='/' className='profile__exit-btn'>Выйти из аккаунта</NavLink>
      </form>
    </section>
  );
};

export default Profile;