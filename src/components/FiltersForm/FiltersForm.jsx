import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import {
  selectLocation,
  selectAC,
  selectKitchen,
  selectTV,
  selectBathroom,
  selectTransmission,
  selectVehicleType,
} from '../../redux/filters/selectors';
import s from './FiltersForm.module.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const FiltersForm = ({ locationOptions = [], onSearch }) => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const AC = useSelector(selectAC);
  const kitchen = useSelector(selectKitchen);
  const TV = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);
  const transmission = useSelector(selectTransmission);
  const vehicleType = useSelector(selectVehicleType);

  const handleChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({
      location,
      AC,
      kitchen,
      TV,
      bathroom,
      transmission,
      vehicleType,
    });
  };

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <div className={s.locationWrapper}>
        <label className={s.locationLabel}>
          Location:
          <select
            className={s.locationSelect}
            value={location || locationOptions[0]}
            onChange={e => handleChange('location', e.target.value)}
          >
            {locationOptions.map(loc => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </label>
        <Icon
          className={s.locationIcon}
          name="icon-map-1"
          size={20}
          stroke="#101828"
        />
      </div>

      <div className={s.vehEqv}>
        <h3 className={s.filterTitle}>Filters</h3>

        <h4 className={s.vehicle}>Vehicle equipment</h4>

        <div className={s.vehicleWrapper}>
          <label className={s.vehicleButton}>
            <input
              type="checkbox"
              name="AC"
              checked={AC}
              onChange={e => handleChange('AC', e.target.checked)}
            />
            <div className={s.content}>
              <Icon name="icon-wind" size={32} />
              <p>AC</p>
            </div>
          </label>

          <label className={s.vehicleButton}>
            <input
              type="checkbox"
              name="transmission"
              value="automatic"
              checked={transmission === 'automatic'}
              onChange={e =>
                handleChange(
                  'transmission',
                  transmission === 'automatic' ? '' : 'automatic'
                )
              }
            />
            <div className={s.content}>
              <Icon name="icon-diagram" size={32} />
              <p>Automatic</p>
            </div>
          </label>

          <label className={s.vehicleButton}>
            <input
              type="checkbox"
              name="kitchen"
              checked={kitchen}
              onChange={e => handleChange('kitchen', e.target.checked)}
            />
            <div className={s.content}>
              <Icon name="icon-cup-hot" size={32} />
              <p>Kitchen</p>
            </div>
          </label>

          <label className={s.vehicleButton}>
            <input
              type="checkbox"
              name="TV"
              checked={TV}
              onChange={e => handleChange('TV', e.target.checked)}
            />
            <div className={s.content}>
              <Icon name="icon-tv" size={32} />
              <p>TV</p>
            </div>
          </label>

          <label className={s.vehicleButton}>
            <input
              type="checkbox"
              name="bathroom"
              checked={bathroom}
              onChange={e => handleChange('bathroom', e.target.checked)}
            />
            <div className={s.content}>
              <Icon name="icon-ph_shower" size={32} />
              <p>Bathroom</p>
            </div>
          </label>
        </div>

        <div></div>
      </div>
      <Button className={s.formButton} type="submit">
        Search
      </Button>
    </form>
  );
};

export default FiltersForm;
