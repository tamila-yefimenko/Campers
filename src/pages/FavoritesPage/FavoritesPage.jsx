import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../redux/campers/selectors';
import s from './FavoritesPage.module.css';
import CamperList from '../../components/CamperList/CamperList';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';
import { selectFavorites } from '../../redux/favorites/selectors';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const allCampers = useSelector(selectItems);
  const favorites = useSelector(selectFavorites);

  const favoriteCampers = allCampers.filter(camper =>
    favorites.includes(camper.id)
  );

  return (
    <div className={s.favoritesWrapper}>
      <h2 className={s.favoriteTitle}>Your Favorite Campers</h2>
      {favoriteCampers.length === 0 ? (
        <p>You have no favorite campers yet.</p>
      ) : (
        <CamperList campers={favoriteCampers} />
      )}
    </div>
  );
};

export default FavoritesPage;
