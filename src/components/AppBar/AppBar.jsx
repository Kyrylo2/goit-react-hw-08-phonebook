import { Header } from './AppBar.styled';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

// import Typography from '@mui/material/Typography';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </>
  );
};

export default AppBar;
