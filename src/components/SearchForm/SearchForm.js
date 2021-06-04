import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm ({ onSearch, handleFilter, filter }) {
  const [keyword, setKeyword] = React.useState('');

  function handleSearch(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(keyword, filter)
  }

  return(
    <section className='searchForm'>
      <form onSubmit={handleSubmit} className='searchForm__form'>
        <div className='searchForm__bar'>
          <input
            onChange={handleSearch}
            className='searchForm__input' 
            placeholder='Фильм'
            type='text'
            value={keyword || ''}
          />
          <button className='searchForm__sbmt-btn'>Найти</button>
        </div>
        <FilterCheckbox
          handleFilter={handleFilter}
          filter={filter}
        />
      </form>
    </section>
  );
}

export default SearchForm;