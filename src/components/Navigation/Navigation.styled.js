import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  background-color: #f5f5f7;

  gap: 16px;
  /* justify-content: space-between; */
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
`;

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
