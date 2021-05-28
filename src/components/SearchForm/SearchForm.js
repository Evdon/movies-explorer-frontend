import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

import './SearchForm.css';

function SearchForm ({ path }) {
  return(
    <section className='searchForm'>
      <form className='searchForm__form'>
        <div className='searchForm__bar'>
          <input className='searchForm__input' placeholder='Фильм' />
          <button className='searchForm__sbmt-btn'>Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;