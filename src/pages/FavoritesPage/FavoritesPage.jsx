import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../redux/campers/selectors';
import s from './FavoritesPage.module.css';
import CamperList from '../../components/CamperList/CamperList';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const allCampers = useSelector(selectItems);

  const favoriteIds =
    JSON.parse(localStorage.getItem('persist:favorites')).items || [];

  const favoriteCampers = allCampers.filter(camper =>
    favoriteIds.includes(camper.id)
  );

  return (
    <div className={s.wrapper}>
      <h2>Your Favorite Campers</h2>
      {favoriteCampers.length === 0 ? (
        <p>You have no favorite campers yet.</p>
      ) : (
        <CamperList campers={favoriteCampers} />
      )}
    </div>
  );
};

export default FavoritesPage;
