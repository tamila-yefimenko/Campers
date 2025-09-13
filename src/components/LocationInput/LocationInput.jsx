import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFilters } from '../../redux/campers/slice';
import { selectFilters } from '../../redux/campers/selectors';
import s from './LocationInput.module.css';
import Icon from '../Icon/Icon';

const LocationInput = ({ locationOptions = [] }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [query, setQuery] = useState(filters.location || '');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setQuery(filters.location || '');
  }, [filters.location]);

  const uniqueOptions = [...new Set(locationOptions)];
  const filteredOptions = uniqueOptions.filter(loc =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);

    dispatch(setFilters({ ...filters, location: value }));
  };

  const handleSelect = option => {
    setQuery(option);
    setShowSuggestions(false);
    dispatch(setFilters({ ...filters, location: option }));
  };

  return (
    <div className={s.locationWrapper}>
      <label className={s.locationLabel}>
        Location:
        <input
          className={s.locationInput}
          type="text"
          placeholder="City"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
      </label>
      <Icon
        className={s.locationIcon}
        name="icon-map-1"
        size={20}
        color={query ? '#101828' : '#6c717b'}
      />

      {showSuggestions && (
        <ul className={s.suggestionsList}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, idx) => (
              <li
                className={s.suggestionItem}
                key={`${option}-${idx}`}
                onMouseDown={() => handleSelect(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li style={{ padding: '6px 12px', color: '#888' }}>
              City is not found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
