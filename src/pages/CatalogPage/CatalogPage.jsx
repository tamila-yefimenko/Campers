import { useEffect } from 'react';
import { fetchContacts } from '../../redux/campers/operations';
import s from './CatalogPage.module.css';
import { useDispatch } from 'react-redux';
import CamperList from '../../components/CamperList/CamperList';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.catalogWrapper}>
      <CamperList />
    </div>
  );
};

export default CatalogPage;
