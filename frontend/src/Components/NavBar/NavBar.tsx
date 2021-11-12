import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { CHAT, HOME, INVITES, PROFILE } from '../../Routes';
import { useUserContext } from '../../Contexts/UserContext';
import { Button } from '../Common/Button';
import { useEffect, useState } from 'react';
import { SvgIcon } from '../Common/SvgIcon';

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
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'House'} to={HOME} />
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'Profile'} to={PROFILE} />
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'Chat'} to={CHAT} />
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'Mail'} to={INVITES} />
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

const ProfileList = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
`;
