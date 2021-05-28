import { NavLink } from 'react-router-dom';
import './Login.css';

function Login({ path }) {

  return(
    <section className='login'>
      <div className='login__area'>
        <NavLink to='/' className='login__logo'></NavLink>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <label className='login__label'>E-mail</label>
          <input className='login__input'></input>
          <label className='login__label'>Пароль</label>
          <input className='login__input'></input>
          <button className='login__submit-btn'>Зарегистрироваться</button>
        </form>
        <p className='login__text'>Ещё не зарегистрированы? <NavLink to='/signup' className='login__link'>Регистрация</NavLink></p>
      </div>
    </section>
  );
}

export default Login;
