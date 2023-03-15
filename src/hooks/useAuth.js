import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
} from '../redux/auth/auth-selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const userName = useSelector(getUserName);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
  };
};
