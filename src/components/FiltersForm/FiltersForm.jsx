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
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import LocationInput from '../LocationInput/LocationInput';

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

    const filtersToSend = {};

    if (location) filtersToSend.location = location;
    if (transmission) filtersToSend.transmission = transmission;
    if (vehicleType) filtersToSend.form = vehicleType;
    if (AC) filtersToSend.AC = true;
    if (kitchen) filtersToSend.kitchen = true;
    if (TV) filtersToSend.TV = true;
    if (bathroom) filtersToSend.bathroom = true;

    onSearch(filtersToSend);
  };

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <LocationInput locationOptions={locationOptions} />

      <div className={s.vehEqv}>
        <h3 className={s.filterTitle}>Filters</h3>

        <h4 className={s.vehicle}>Vehicle equipment</h4>

        <div className={s.vehicleWrapper}>
          <FilterCheckbox
            inputName="AC"
            checked={AC}
            onChange={e => handleChange('AC', e.target.checked)}
            name="icon-wind"
            children="AC"
          />

          <FilterCheckbox
            inputName="transmission"
            value="automatic"
            checked={transmission === 'automatic'}
            onChange={() =>
              handleChange(
                'transmission',
                transmission === 'automatic' ? '' : 'automatic'
              )
            }
            name="icon-diagram"
            children="Automatic"
          />

          <FilterCheckbox
            inputName="kitchen"
            checked={kitchen}
            onChange={e => handleChange('kitchen', e.target.checked)}
            name="icon-cup-hot"
            children="Kitchen"
          />

          <FilterCheckbox
            inputName="TV"
            checked={TV}
            onChange={e => handleChange('TV', e.target.checked)}
            name="icon-tv"
            children="TV"
          />

          <FilterCheckbox
            inputName="bathroom"
            checked={bathroom}
            onChange={e => handleChange('bathroom', e.target.checked)}
            name="icon-ph_shower"
            children="Bathroom"
          />
        </div>

        <h4 className={s.vehicle}>Vehicle type</h4>
        <div className={s.vehicleWrapper}>
          <FilterCheckbox
            inputName="vehicleType"
            value="panelTruck"
            checked={vehicleType === 'panelTruck'}
            onChange={() =>
              handleChange(
                'vehicleType',
                vehicleType === 'panelTruck' ? '' : 'panelTruck'
              )
            }
            name="icon-bi_grid-1x2"
            children="Van"
          />

          <FilterCheckbox
            inputName="vehicleType"
            value="fullyIntegrated"
            checked={vehicleType === 'fullyIntegrated'}
            onChange={() =>
              handleChange(
                'vehicleType',
                vehicleType === 'fullyIntegrated' ? '' : 'fullyIntegrated'
              )
            }
            name="icon-bi_grid"
            children="Fully Integrated"
          />

          <FilterCheckbox
            inputName="vehicleType"
            value="alcove"
            checked={vehicleType === 'alcove'}
            onChange={() =>
              handleChange(
                'vehicleType',
                vehicleType === 'alcove' ? '' : 'alcove'
              )
            }
            name="icon-bi_grid-3x3-gap"
            children="Alcove"
          />
        </div>
      </div>
      <Button className={s.formButton} type="submit">
        Search
      </Button>
    </form>
  );
};

export default FiltersForm;
