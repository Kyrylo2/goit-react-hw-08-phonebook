import { useState } from 'react';
import { FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAddContactMutation } from 'redux/contactsApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^\+380\d{9}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number must be a valid Ukrainian phone number')
    .required('Phone number is required'),
});

export default function ContactsForm() {
  const [addContact] = useAddContactMutation();

  const initialValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formObj = {
      name: values.name,
      number: values.phone,
    };
    await addContact(formObj).unwrap();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <FormControl
            noValidate
            autoComplete="off"
            sx={{
              minWidth: '350px',
              maxWidth: '500px',
              gap: '10px',
              margin: '0 auto',
            }}
          >
            <Field
              as={TextField}
              id="outlined-search"
              label="Full Name"
              name="name"
              type="text"
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              id="outlined-search"
              label="Phone"
              name="phone"
              type="tel"
              error={touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
            />
            <Typography variant="caption" color="text.secondary">
              Phone number must be a valid Ukrainian phone number
              (+380XXXXXXXXX)
            </Typography>
            <Button variant="contained" size="small" type="submit">
              Add contact
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
}
