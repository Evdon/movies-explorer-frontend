import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';

function SavedMovies ({ path }) {

  return(
    <section className='savedMovies'>
      <SearchForm></SearchForm>
      <MoviesCardList path={path}></MoviesCardList>
    </section>
  );
}

export default SavedMovies;
