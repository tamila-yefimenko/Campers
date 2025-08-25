import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './BookingForm.module.css';
import Button from '../Button/Button';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/campers/selectors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  dateRange: Yup.array()
    .of(Yup.date().required())
    .min(2, 'Please select start and end date')
    .required('Required'),
  comment: Yup.string().max(500, 'Too Long!'),
});

const BookingForm = () => {
  const currentCamper = useSelector(selectCurrentCamper);
  const [isOpen, setIsOpen] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    dateRange: [null, null],
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    const [startDate, endDate] = values.dateRange;

    const bookingData = {
      camperId: currentCamper.id,
      camperName: currentCamper.name,
      startDate,
      endDate,
      comment: values.comment,
      name: values.name,
      email: values.email,
    };

    console.log('Booking data:', bookingData);

    toast.success(
      `You have successfully booked ${currentCamper.name} 
      from ${startDate?.toLocaleDateString()} to ${endDate?.toLocaleDateString()}!`
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
        {({ setFieldValue, values }) => (
          <Form className={s.bookingForm}>
            <div className={s.inputWrapper}>
              <Field type="text" name="name" placeholder="Name*" />
              <ErrorMessage name="name" component="span" className={s.error} />
            </div>

            <div className={s.inputWrapper}>
              <Field type="email" name="email" placeholder="Email*" />
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>

            <div className={s.inputWrapper}>
              <DatePicker
                selectsRange
                startDate={values.dateRange[0]}
                endDate={values.dateRange[1]}
                onChange={update => setFieldValue('dateRange', update)}
                minDate={new Date()}
                placeholderText={
                  isOpen ? 'Select a day after today' : 'Select booking dates*'
                }
                className={s.dateInput}
                wrapperClassName={s.dateInputWrapper}
                onCalendarOpen={() => setIsOpen(true)}
                onCalendarClose={() => setIsOpen(false)}
              />
              <ErrorMessage
                name="dateRange"
                component="span"
                className={s.error}
              />
            </div>

            <div className={s.inputWrapper}>
              <Field as="textarea" name="comment" placeholder="Comment" />
              <ErrorMessage
                name="comment"
                component="span"
                className={s.error}
              />
            </div>

            <Button className={s.formButton} type="submit">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
