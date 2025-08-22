import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import s from './CamperPage.module.css';
import { fetchCamperById } from '../../redux/campers/operations';
import {
  selectCurrentCamper,
  selectError,
  selectIsLoading,
} from '../../redux/campers/selectors';
import Icon from '../../components/Icon/Icon';
import clsx from 'clsx';
import BookingForm from '../../components/BookingForm/BookingForm';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentCamper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  if (!currentCamper) return null;

  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.detailsWrapper}>
      <h2 className={s.camperName}>{currentCamper.name}</h2>
      <div className={s.rewiewWrapper}>
        <p className={s.camperRating}>
          {currentCamper.reviews && currentCamper.reviews.length > 0 ? (
            <>
              <Icon
                name="icon-Property-1Default-1-1"
                size={16}
                color="#ffc531"
              />
              {currentCamper.rating} ({currentCamper.reviews.length} Rewiews)
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
          {currentCamper.location}
        </p>
      </div>
      <p className={s.camperPrice}>€ {currentCamper.price.toFixed(2)}</p>

      <div className={s.gallery}>
        {currentCamper.gallery?.map((img, idx) => (
          <img
            className={s.camperImage}
            key={`${idx}-${img.original}`}
            src={img.original}
            alt={`${currentCamper.name} ${idx + 1}`}
          />
        ))}
      </div>

      <p className={s.description}>{currentCamper.description}</p>

      <nav className={s.navInfo}>
        <NavLink className={setActiveClass} to="features">
          Features
        </NavLink>
        <NavLink className={setActiveClass} to="rewiews">
          Reviews
        </NavLink>
      </nav>

      <div className={s.bookingWrapper}>
        <Outlet context={{ currentCamper }} />
        <BookingForm />
      </div>

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default CamperPage;
