import { NavigationLink, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavigationLink to="/register">Sign up</NavigationLink>
      <NavigationLink to="/login">Sign in</NavigationLink>
    </AuthNavContainer>
  );
};
