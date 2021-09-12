import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/FormWithValidation';
import './Login.css';

function Login({ handleLogin }) {
  const validate = useFormWithValidation();

  function hadleSubmit(e){
    e.preventDefault();
    handleLogin( validate.values );
  }

  return(
    <section className='login'>
      <div className='login__area'>
        <NavLink to='/' className='login__logo'></NavLink>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form' onSubmit={hadleSubmit}>
          <label className='login__label'>E-mail</label>
          <input
            required
            name='email'
            className={`login__input ${validate.errors.email ? 'login__input-error' : ''}`}
            value={validate.values.email || ''}
            onChange={validate.handleChange}
          ></input>
          <span className='login__error'>{validate.errors.email || ''}</span>
          <label className='login__label'>Пароль</label>
          <input
            required
            className={`login__input ${validate.errors.password ? 'login__input-error' : ''}`}
            name='password'
            type='password'
            minLength='6'
            maxLength='30'
            value={validate.values.password || ''}
            onChange={validate.handleChange}
          ></input>
          <span className='login__error'>{validate.errors.password || ''}</span>
          <button
            className={`login__submit-btn ${
              validate.isValid ? '' : 'login__submit-btn_disabled'
            }`}
            disabled={!validate.isValid}
          >Войти</button>
        </form>
        <p className='login__text'>Ещё не зарегистрированы? <NavLink to='/signup' className='login__link'>Регистрация</NavLink></p>
      </div>
    </section>
  );
}

export default Login;
