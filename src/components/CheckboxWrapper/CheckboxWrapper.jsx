import Icon from '../Icon/Icon';
import s from './CheckboxWrapper.module.css';

const CheckboxWrapper = ({ name, children }) => {
  return (
    <div className={s.content}>
      <Icon name={name} size={32} />
      <p>{children}</p>
    </div>
  );
};

export default CheckboxWrapper;
