import { useOutletContext } from 'react-router-dom';
import s from './CamperRewiew.module.css';
import Icon from '../Icon/Icon';

const CamperRewiew = () => {
  const { currentCamper } = useOutletContext();

  if (!currentCamper) return null;

  const { reviews } = currentCamper;

  return (
    <div className={s.reviewsWrapper}>
      {reviews?.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className={s.reviewCard}>
            <div className={s.nameWrapper}>
              <div className={s.avatar}>
                {review.reviewer_name[0].toUpperCase()}
              </div>

              <div className={s.reviewContent}>
                <h4 className={s.reviewerName}>{review.reviewer_name}</h4>

                <div className={s.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="icon-Property-1Default-1-1"
                      size={16}
                      className={
                        i < review.reviewer_rating ? s.starActive : s.star
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={s.reviewText}>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default CamperRewiew;
