import Icon from '../Icon/Icon';
import s from './FilterCheckbox.module.css';

const FilterCheckbox = ({
  inputName,
  value,
  checked,
  onChange,
  name,
  children,
}) => {
  return (
    <label className={s.vehicleButton}>
      <input
        type="checkbox"
        name={inputName}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className={s.content}>
        <Icon name={name} size={32} />
        <p>{children}</p>
      </div>
    </label>
  );
};

export default FilterCheckbox;
