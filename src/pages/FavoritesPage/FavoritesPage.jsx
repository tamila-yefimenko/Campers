import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCampers } from '../../redux/campers/operations';
import { selectItems, selectIsLoading } from '../../redux/campers/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import CamperList from '../../components/CamperList/CamperList';
import Loader from '../../components/Loader/Loader';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const allCampers = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const favoritesIds = useSelector(selectFavorites);

  useEffect(() => {
    if (allCampers.length === 0) {
      dispatch(fetchAllCampers());
    }
  }, [dispatch, allCampers.length]);

  const favoriteCampers = allCampers.filter(camper =>
    favoritesIds.includes(camper.id)
  );

  return (
    <div className={s.favoritesWrapper}>
      <h2 className={s.favoriteTitle}>Your Favorite Campers</h2>
      {isLoading ? (
        <Loader />
      ) : favoriteCampers.length === 0 ? (
        <p>You have no favorite campers yet.</p>
      ) : (
        <CamperList campers={favoriteCampers} />
      )}
    </div>
  );
};

export default FavoritesPage;
