import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  redirectTo = '/goit-react-hw-08-phonebook',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PublicRoute;
