import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';

function SavedMovies ({ path, onSearch, handleFilter, filter, movies, numberOfMovies, handleMore, searching, deleteMovie }) {

  return(
    <section className='savedMovies'>
      <SearchForm 
        onSearch={onSearch}
        handleFilter={handleFilter}
        filter={filter}
      ></SearchForm>
      <MoviesCardList 
        path={path}
        movies={movies} 
        numberOfMovies={numberOfMovies} 
        handleMore={handleMore} 
        searching={searching}
        deleteMovie={deleteMovie}
      ></MoviesCardList>
    </section>
  );
}

export default SavedMovies;
