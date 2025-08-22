import { Link } from 'react-router-dom';
import s from './CamperList.module.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { camperOptions } from '../../constants/camperOptions';

const CamperList = ({ campers }) => {
  return (
    <ul className={s.camperList}>
      {campers.map(camper => (
        <li className={s.camperItem} key={camper.id}>
          <img
            src={camper.gallery?.[0].original}
            alt={camper.name}
            className={s.camperImage}
          />
          <div className={s.camperWrapper}>
            <div className={s.titleWrapper}>
              <h3 className={s.camperName}>{camper.name}</h3>
              <p className={s.camperPrice}>€{camper.price.toFixed(2)}</p>
            </div>
            <div className={s.rewiewWrapper}>
              <p className={s.camperRating}>
                {camper.reviews && camper.reviews.length > 0 ? (
                  <>
                    <Icon
                      name="icon-Property-1Default-1-1"
                      size={16}
                      color="#ffc531"
                    />
                    {camper.rating} ({camper.reviews.length} Rewiews)
                  </>
                ) : (
                  <>
                    <Icon
                      name="icon-Property-1Default-1-1"
                      size={16}
                      color="#f2f4f7"
                    />
                    (No Rating)
                  </>
                )}
              </p>
              <p className={s.camperLocation}>
                <Icon name="icon-map-1" size={16} />
                {camper.location}
              </p>
            </div>
            <p className={s.camperDescription}>
              {camper.description.length > 60
                ? camper.description.slice(0, 60) + '…'
                : camper.description}
            </p>
            <ul className={s.camperOptions}>
              {camperOptions.map(opt =>
                camper[opt.key] ? (
                  <li key={opt.key} className={s.option}>
                    <Icon name={opt.icon} size={20} color="#101828" />
                    <span>{opt.label}</span>
                  </li>
                ) : null
              )}
            </ul>

            <Link to={`/catalog/${camper.id}`} className={s.camperLink}>
              <Button>Show more</Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
