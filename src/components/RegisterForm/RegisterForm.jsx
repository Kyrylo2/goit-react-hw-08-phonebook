import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            spacing={3}
          >
            <Box sx={{ width: '100%' }}>
              <Field
                as={TextField}
                name="name"
                label="Username"
                variant="outlined"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                sx={{ width: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ width: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Field
                as={TextField}
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ width: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Field
                as={TextField}
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ width: '100%' }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ height: 55, width: '200' }}
            >
              Register
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
