import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCampers,
  fetchFilteredCampers,
} from '../../redux/campers/operations';
import { setPage, resetPage } from '../../redux/campers/slice';
import {
  selectItems,
  selectPage,
  selectIsLoading,
  selectError,
  selectLimit,
} from '../../redux/campers/selectors';
import CamperList from '../../components/CamperList/CamperList';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const allCampers = useSelector(selectItems);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campersPerPage = useSelector(selectLimit);

  // кемпери, які реально показуються
  const visibleCampers = allCampers.slice(0, page * campersPerPage);

  // Унікальні локації для фільтра
  const locationOptions = Array.from(new Set(allCampers.map(c => c.location)));

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };
  console.log(page);
  console.log(visibleCampers);

  const handleSearch = filters => {
    dispatch(resetPage());
    dispatch(fetchFilteredCampers(filters));
  };

  return (
    <div className={s.wrapper}>
      <FiltersForm locationOptions={locationOptions} onSearch={handleSearch} />

      <div className={s.catalogWrapper}>
        <CamperList campers={visibleCampers} />

        {visibleCampers.length < allCampers.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default CatalogPage;
