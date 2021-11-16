import styled from 'styled-components';
import { CHAT, HOME, INVITES } from '../../Routes';
import { useEffect, useState } from 'react';
import { SvgIcon } from '../Common/SvgIcon';
import { JustifyContentType } from '../Common/Container';
import { SettingsMenu } from '../Settings/SettingsMenu';

export const NavBar = (): JSX.Element => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 500 ? setMobileNav(true) : setMobileNav(false);
    });
  }, []);

  const toggleMenu = (toState: boolean) => setIsMenuOpen(toState);

  return mobileNav ? (
    <NavBarContainer justify={'flex-end'}>
      {!isMenuOpen ? (
        <SvgIcon
          height={'2rem'}
          width={'2rem'}
          hoverColor="white"
          type={'Hamburger'}
          onClick={() => toggleMenu(true)}
        />
      ) : (
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'X'} onClick={() => toggleMenu(false)} />
      )}
    </NavBarContainer>
  ) : (
    <NavBarContainer>
      <NavList>
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'House'} to={HOME} />
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'Chat'} to={CHAT} />
        <SvgIcon height={'2rem'} width={'2rem'} hoverColor="white" type={'Mail'} to={INVITES} />
      </NavList>
      <ProfileList>
        <SettingsMenu />
      </ProfileList>
    </NavBarContainer>
  );
};

type NavBarProps = { readonly justify?: JustifyContentType };

const NavBarContainer = styled.div.attrs(({ justify }: NavBarProps) => ({ justify: justify }))`
  display: flex;
  align-items: center;
  ${props => props.justify && `justify-content: ${props.justify};`}
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
