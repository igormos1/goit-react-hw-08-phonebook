import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 30px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 20px;
  &.active {
    color: red;
  }
`;
export const Name = styled.p`
  margin: 0px 20px;
  padding: 12px;
  font-weight: 800;
  font-size: 20px;
`;
