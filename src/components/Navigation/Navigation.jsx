import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.navWrapper}>
      <nav className={s.nav}>
        <NavLink to="/" className={s.logo}>
          TravelTrucks
        </NavLink>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
