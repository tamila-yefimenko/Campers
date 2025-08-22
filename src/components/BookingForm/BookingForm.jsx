import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './BookingForm.module.css';
import Button from '../Button/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/campers/selectors';

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().required('Required'),
  comment: Yup.string().max(500, 'Too Long!'),
});

const BookingForm = () => {
  const currentCamper = useSelector(selectCurrentCamper);

  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    const bookingData = {
      camperId: currentCamper.id,
      camperName: currentCamper.name,
      ...values,
    };

    console.log('Booking data:', bookingData);

    toast.success(
      `You have successfully booked the camper ${currentCamper.name}!`
    );

    actions.resetForm();
  };

  return (
    <div className={s.bookingWrapper}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.bookingForm}>
          <div className={s.inputWrapper}>
            <Field type="text" name="name" id="name" placeholder="Name*" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>

          <div className={s.inputWrapper}>
            <Field type="email" name="email" id="email" placeholder="Email*" />
            <ErrorMessage name="email" component="span" className={s.error} />
          </div>

          <div className={s.inputWrapper}>
            <Field
              type="text"
              name="date"
              id="date"
              onFocus={e => (e.target.type = 'date')}
              onBlur={e => {
                if (!e.target.value) e.target.type = 'text';
              }}
              placeholder="Booking date*"
              min={new Date().toISOString().split('T')[0]}
            />
            <ErrorMessage name="date" component="span" className={s.error} />
          </div>

          <div className={s.inputWrapper}>
            <Field
              as="textarea"
              name="comment"
              id="comment"
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="span" className={s.error} />
          </div>

          <Button className={s.formButton} type="submit">
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
