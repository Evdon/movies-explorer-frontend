import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList ({ path }) {
  var arr = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3];

  return(
    <section className='moviesCardList'>
      <div className='moviesCardList__list'>
        {arr.map((card) => (
          <MoviesCard 
            path={path}
          />
        ))}
      </div>
      <button className='moviesCardList__more-btn'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
