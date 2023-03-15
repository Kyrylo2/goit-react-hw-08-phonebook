import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
