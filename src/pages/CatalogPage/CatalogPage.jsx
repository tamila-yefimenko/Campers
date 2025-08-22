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
  selectTotalPages,
  selectPaginatedCampers,
} from '../../redux/campers/selectors';
import CamperList from '../../components/CamperList/CamperList';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import s from './CatalogPage.module.css';
import { resetFilters } from '../../redux/filters/slice';
import Button from '../../components/Button/Button';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectPaginatedCampers);
  const allCampers = useSelector(selectItems);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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

  const handleShowAll = () => {
    dispatch(resetFilters());
    dispatch(resetPage());
    dispatch(fetchCampers());
  };

  const hasCampers = campers.length > 0;
  const showNoCampersMessage =
    !isLoading && !hasCampers && allCampers.length > 0;

  return (
    <div className={s.wrapper}>
      <FiltersForm locationOptions={locationOptions} onSearch={handleSearch} />

      <div className={s.catalogWrapper}>
        {isLoading && <Loader />}

        {hasCampers && <CamperList campers={campers} />}

        {showNoCampersMessage && (
          <>
            <p className={s.noCampers}>
              No campers found with selected filters.
            </p>
            <Button className={s.showAllButton} onClick={handleShowAll}>
              Show all campers
            </Button>
          </>
        )}

        {hasCampers && page < totalPages && (
          <Button className={s.loadMore} onClick={handleLoadMore}>
            Load More
          </Button>
        )}

        {error && <ErrorMessage />}
      </div>

      {/* {isLoading && <Loader />} */}
    </div>
  );
};
export default CatalogPage;
