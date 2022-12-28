import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4)
    .max(40)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Please enter contact name'),
  number: yup
    .string()
    .min(6)
    .max(15)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter contact number'),
});

export const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <ErrorMessage component="span" name="name" />
          <label>
            Number
            <Field type="tel" name="number" />
          </label>
          <ErrorMessage component="span" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
