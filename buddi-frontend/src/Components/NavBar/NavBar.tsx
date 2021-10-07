import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { HOME, PROFILE } from '../../Routes';

export const NavBar = (): JSX.Element => (
  <StyledNavBar>
    <NavList>
      <Link to={HOME}>Home</Link>
      <Link to={PROFILE}>Profile</Link>
    </NavList>
    <ProfileList>
      <button>Log Out</button>
    </ProfileList>
  </StyledNavBar>
);

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.secondary.backgroundColor};
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  > * {
    margin: 0 1rem;
  }
`;

const Link = styled(RouterLink)`
  font-weight: 600;
  padding: 5px 10px;
  color: ${props => props.theme.primary.button.color};
  background-color: ${props => props.theme.primary.button.backgroundColor};
  text-decoration: none;
  outline: none;
  border-radius: 15px;

  &:hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;

const ProfileList = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
`;
