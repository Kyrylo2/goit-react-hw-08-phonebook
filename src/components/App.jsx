import React, { useEffect, lazy } from 'react';

import Layout from 'components/Layout';

import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRouts';
import PublicRoute from './PublicRouts';

import { useDispatch } from 'react-redux';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={<PublicRoute component={Register} redirectTo="/contacts" />}
        />
        <Route
          path="login"
          element={<PublicRoute component={Login} redirectTo="/contacts" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
