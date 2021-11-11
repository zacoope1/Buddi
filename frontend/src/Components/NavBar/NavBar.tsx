import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { HOME, PROFILE } from '../../Routes';
import { useUserContext } from '../../Contexts/UserContext';
import { Button } from '../Common/Button';
import { useEffect, useState } from 'react';

export const NavBar = (): JSX.Element => {
  const { performLogOut } = useUserContext();
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 500 ? setMobileNav(true) : setMobileNav(false);
    });
  }, []);

  return mobileNav ? (
    <></>
  ) : (
    <DesktopNavbar>
      <NavList>
        <Link to={HOME}>Home</Link>
        <Link to={PROFILE}>Profile</Link>
      </NavList>
      <ProfileList>
        <Button backgroundColor={'red'} width={'7rem'} height={'2rem'} onClick={performLogOut}>
          Log Out
        </Button>
      </ProfileList>
    </DesktopNavbar>
  );
};

const DesktopNavbar = styled.div`
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
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  color: ${props => props.theme.primary.button.color};
  background-color: ${props => props.theme.primary.button.backgroundColor};
  border: 1px solid ${props => props.theme.transparent};
  outline: none;
  border-radius: 90px;
  text-align: center;

  &:hover {
    border: 1px solid ${props => props.theme.primary.trim};
  }

  &:active {
    opacity: 0.75;
  }
`;

const ProfileList = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
`;
