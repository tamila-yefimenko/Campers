import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/campers/slice';
import s from './FiltersForm.module.css';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import LocationInput from '../LocationInput/LocationInput';
import { selectFilters } from '../../redux/campers/selectors';

const FiltersForm = ({ locationOptions = [], onSearch }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { AC, kitchen, TV, bathroom, transmission, form } = filters;

  const handleSubmit = e => {
    e.preventDefault();

    const cleanedFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => {
        if (typeof value === 'boolean') return value;
        return value !== '';
      })
    );

    onSearch(cleanedFilters);
  };

  const handleChange = (key, value) => {
    dispatch(setFilters({ ...filters, [key]: value }));
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
            checked={AC ?? false}
            onChange={e => handleChange('AC', e.target.checked)}
            name="icon-wind"
            children={'AC'}
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
            children={'Automatic'}
          />

          <FilterCheckbox
            inputName="kitchen"
            checked={kitchen ?? false}
            onChange={e => handleChange('kitchen', e.target.checked)}
            name="icon-cup-hot"
            children={'Kitchen'}
          />

          <FilterCheckbox
            inputName="TV"
            checked={TV ?? false}
            onChange={e => handleChange('TV', e.target.checked)}
            name="icon-tv"
            children={'TV'}
          />

          <FilterCheckbox
            inputName="bathroom"
            checked={bathroom ?? false}
            onChange={e => handleChange('bathroom', e.target.checked)}
            name="icon-ph_shower"
            children={'Bathroom'}
          />
        </div>

        <h4 className={s.vehicle}>Vehicle type</h4>
        <div className={s.vehicleWrapper}>
          <FilterCheckbox
            inputName="form"
            value="panelTruck"
            checked={form === 'panelTruck'}
            onChange={() =>
              handleChange('form', form === 'panelTruck' ? '' : 'panelTruck')
            }
            name="icon-bi_grid-1x2"
            children={'Van'}
          />

          <FilterCheckbox
            inputName="form"
            value="fullyIntegrated"
            checked={form === 'fullyIntegrated'}
            onChange={() =>
              handleChange(
                'form',
                form === 'fullyIntegrated' ? '' : 'fullyIntegrated'
              )
            }
            name="icon-bi_grid"
            children={'Fully Integrated'}
          />

          <FilterCheckbox
            inputName="form"
            value="alcove"
            checked={form === 'alcove'}
            onChange={() =>
              handleChange('form', form === 'alcove' ? '' : 'alcove')
            }
            name="icon-bi_grid-3x3-gap"
            children={'Alcove'}
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
