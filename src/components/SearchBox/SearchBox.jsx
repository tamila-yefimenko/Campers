import { useId } from 'react';
import { changeFilter } from '../../redux/filters/slice';
import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const id = useId();
  const filter = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.filterInputWrapper}>
      <label className={s.inputTitle} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={s.filterInput}
        value={filter}
        onChange={handleFilter}
        type="text"
        id={id}
      ></input>
    </div>
  );
};

export default SearchBox;
