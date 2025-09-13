import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCampers,
  fetchFilteredCampers,
} from '../../redux/campers/operations';
import {
  setPage,
  resetPage,
  setFilters,
  resetFilters,
} from '../../redux/campers/slice';
import {
  selectPage,
  selectIsLoading,
  selectError,
  selectTotalPages,
  selectPaginatedCampers,
  selectItems,
  selectLocations,
} from '../../redux/campers/selectors';
import CamperList from '../../components/CamperList/CamperList';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectPaginatedCampers);
  const allCampers = useSelector(selectItems);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const locationOptions = useSelector(selectLocations);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchAllCampers());
      dispatch(fetchFilteredCampers());
    }
  }, [dispatch, campers.length]);

  const handleSearch = filters => {
    dispatch(setFilters(filters));
    dispatch(resetPage());
    dispatch(fetchFilteredCampers());
  };

  const handleShowAll = () => {
    dispatch(resetFilters());
    dispatch(resetPage());
    dispatch(fetchFilteredCampers());
  };

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchFilteredCampers());
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

        <div className={s.loadMoreWrapper}>
          {page < totalPages && (
            <Button className={s.loadMore} onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </div>

        {error && <ErrorMessage />}
      </div>
    </div>
  );
};

export default CatalogPage;
