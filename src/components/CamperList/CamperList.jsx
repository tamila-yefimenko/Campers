import { Link } from 'react-router-dom';
import s from './CamperList.module.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const CamperList = ({ campers }) => {
  const options = [
    { key: 'AC', label: 'AC', icon: 'icon-wind' },
    { key: 'bathroom', label: 'Bathroom', icon: 'icon-ph_shower' },
    { key: 'kitchen', label: 'Kitchen', icon: 'icon-cup-hot' },
    { key: 'TV', label: 'TV', icon: 'icon-tv' },
    { key: 'radio', label: 'Radio', icon: 'icon-ui-radios' },
    {
      key: 'refrigerator',
      label: 'Refrigerator',
      icon: 'icon-solar_fridge-outline',
    },
    { key: 'microwave', label: 'Microwave', icon: 'icon-lucide_microwave' },
    { key: 'gas', label: 'Gas', icon: 'icon-hugeicons_gas-stove' },
    { key: 'water', label: 'Water', icon: 'icon-ion_water-outline' },
  ];

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
              {options.map(opt =>
                camper[opt.key] ? (
                  <li key={opt.key} className={s.option}>
                    <Icon name={opt.icon} size={20} color="#101828" />
                    <span>{opt.label}</span>
                  </li>
                ) : null
              )}
            </ul>

            <Link to={`/campers/${camper.id}`} className={s.camperLink}>
              <Button>Show more</Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
