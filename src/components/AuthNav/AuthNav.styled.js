import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;

  &.active {
    color: #007aff;
  }

  :hover:not(.active) {
    color: #007aff;
    background-color: #e5e5ea;
  }
`;

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 16px;
`;
