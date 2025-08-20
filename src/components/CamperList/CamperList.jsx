import { selectCampers } from '@/redux/campers/selectors';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import s from './CamperList.module.css';

const CamperList = () => {
  const location = useLocation();
  const campers = useSelector(selectCampers);

  return (
    <ul className={s.camperList}>
      {campers.map(camper => (
        <li className={s.camperItem} key={camper.id}>
          <Link state={location} to={`/campers/${camper.id}`}>
            {camper.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
