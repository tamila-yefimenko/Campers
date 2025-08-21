import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import s from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const goToCampers = () => {
    navigate('/catalog');
  };

  return (
    <div className={s.home}>
      <h1 className={s.homeTitle}>Campers of your dreams</h1>
      <p className={s.homeText}>
        You can find everything you want in our catalog
      </p>
      <Button className={s.homeButton} onClick={goToCampers}>
        View Now
      </Button>
    </div>
  );
};

export default HomePage;
