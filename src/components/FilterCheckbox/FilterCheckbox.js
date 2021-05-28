import './FilterCheckbox.css';

function FilterCheckbox () {
  return (
    <section className='filterCheckbox'>
      <div className='filterCheckbox__container'>
        <label className='filterCheckbox__label'>
          <input type='checkbox' className='filterCheckbox__input' />
          <span className='filterCheckbox__switcher'></span>
        </label>
      </div>
      <p className='filterCheckbox__title'>Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;