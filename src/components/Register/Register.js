import { NavLink } from 'react-router-dom';
import './Register.css';

function Register({ path }) {

  return(
    <section className='register'>
      <div className='register__area'>
        <NavLink to='/' className='register__logo'></NavLink>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <label className='register__label'>Имя</label>
          <input className='register__input'></input>
          <label className='register__label'>E-mail</label>
          <input className='register__input'></input>
          <label className='register__label'>Пароль</label>
          <input className='register__input'></input>
          <button className='register__submit-btn'>Зарегистрироваться</button>
        </form>
        <p className='register__text'>Уже зарегистрированы? <NavLink to='/signin' className='register__link'>Войти</NavLink></p>
      </div>
    </section>
  );
}

export default Register;
