import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCampers,
  fetchFilteredCampers,
} from '../../redux/campers/operations';
import { setPage, resetPage } from '../../redux/campers/slice';
import {
  selectItems,
  selectPaginatedCampers,
  selectTotalPages,
  selectPage,
  selectIsLoading,
  selectError,
} from '../../redux/campers/selectors';
import CamperList from '../../components/CamperList/CamperList';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectPaginatedCampers);
  const allCampers = useSelector(selectItems); // всі кемпери для локацій
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Витягуємо унікальні локації
  const locationOptions = Array.from(new Set(allCampers.map(c => c.location)));

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handleSearch = filters => {
    dispatch(resetPage());
    dispatch(fetchFilteredCampers(filters));
  };

  return (
    <div className={s.wrapper}>
      <FiltersForm locationOptions={locationOptions} onSearch={handleSearch} />
      <div className={s.catalogWrapper}>
        <CamperList campers={campers} />

        {page < totalPages && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default CatalogPage;
