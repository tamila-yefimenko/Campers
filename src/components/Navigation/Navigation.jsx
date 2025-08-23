import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
import Icon from '../Icon/Icon';

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.logo}>
        Travel<span className={s.span}>Trucks</span>
      </NavLink>
      <div className={s.wrapper}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={setActiveClass} to="/favorites">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
