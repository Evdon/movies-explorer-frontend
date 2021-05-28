
import { NavLink } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

  return(
    <section className='notFound'>
      <div className='notFound__container'>
        <h2 className='notFound__title'>404</h2>
        <p className='notFound__text'>Страница не найдена</p>
        <NavLink to='/' className='notFound__link'>Назад</NavLink>
      </div>
    </section>
  )
}

export default NotFound;