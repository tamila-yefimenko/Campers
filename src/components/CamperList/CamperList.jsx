import { Link } from 'react-router-dom';
import s from './CamperList.module.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { camperOptions } from '../../constants/camperOptions';
import { toggleFavorite } from '../../redux/favorites/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleFavorite = camper => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <ul className={s.camperList}>
      {campers.map(camper => {
        const isFavorite = favorites.includes(camper.id);
        return (
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
                <button
                  className={s.favoriteIcon}
                  onClick={() => handleFavorite(camper.id)}
                >
                  <Icon
                    name="icon-Property-1Default-2"
                    size={26}
                    color={isFavorite ? '#d84343' : '#101828'}
                  />
                </button>
              </div>
              <div className={s.rewiewWrapper}>
                <p className={s.camperRating}>
                  <Icon
                    name="icon-Property-1Default-1-1"
                    size={16}
                    color={camper.reviews?.length ? '#ffc531' : '#f2f4f7'}
                  />
                  {camper.reviews?.length
                    ? `${camper.rating} (${camper.reviews.length} Reviews)`
                    : '(No Rating)'}
                </p>
                <p className={s.camperLocation}>
                  <Icon name="icon-map-1" size={16} />
                  {camper.location}
                </p>
              </div>
              <p className={s.camperDescription}>
                {camper.description.length > 65
                  ? camper.description.slice(0, 65) + '…'
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
        );
      })}
    </ul>
  );
};

export default CamperList;
