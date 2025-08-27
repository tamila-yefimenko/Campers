import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setFilter } from '../../redux/filters/slice';
import { selectLocation } from '../../redux/filters/selectors';
import s from './LocationInput.module.css';
import Icon from '../Icon/Icon';

const LocationInput = ({ locationOptions = [] }) => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);

  const [query, setQuery] = useState(selectedLocation || '');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredOptions = locationOptions.filter(loc =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = e => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSelect = option => {
    setQuery(option);
    setShowSuggestions(false);
    dispatch(setFilter({ key: 'location', value: option }));
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
            filteredOptions.map(option => (
              <li
                className={s.suggestionItem}
                key={option}
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
