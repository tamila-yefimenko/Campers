import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Navigation />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
