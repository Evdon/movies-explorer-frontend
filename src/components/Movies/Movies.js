import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './Movies.css';

function Movies ({ path }) {
  return(
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList path={path}></MoviesCardList>
    </section>
  );
}

export default Movies;
