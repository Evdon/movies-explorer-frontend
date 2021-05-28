import './MoviesCard.css';
import FilmImg from '../../images/film__pic.png';

function MoviesCard ({ path }) {

  const likeVisible = (path === '/saved-movies') && 'none'
  const deleteVisible = (path === '/movies') && 'none'

  return(
    <div className='moviesCard' id='card'>
      <img 
        src={FilmImg}
        className='moviesCard__img'
        alt=' '
      />
      <div className='moviesCard__info'>
        <div className='moviesCard__info-area'>
          <p
            className='moviesCard__name'
          >33 слова о дизайне</p>
          <button 
            className='moviesCard__like'
            style={{display: likeVisible}}
          ></button>
          <button 
            className='moviesCard__delete'
            style={{display: deleteVisible}}  
          ></button>
        </div>
        <p className='moviesCard__time'>1ч42мин</p>
      </div>
    </div>
  );
}

export default MoviesCard;