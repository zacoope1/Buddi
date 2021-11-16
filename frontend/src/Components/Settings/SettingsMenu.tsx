import { useState } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../Common/Container';
import { Override } from '../Common/Override';
import { SvgIcon } from '../Common/SvgIcon';
import { useUserContext } from '../../Contexts/UserContext';
import { ProfilePhotoIcon } from '../Common/ProfilePhoto';
import { Text } from '../Common/Text';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { PROFILE, SETTINGS } from '../../Routes';

export const SettingsMenu = (): JSX.Element => {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Override cursor={'pointer'} hoverColor={'#fffffa'}>
        <FlexRow onClick={handleOpenMenu} margin={'0rem'} justify={'center'} align={'center'}>
          {user && user.photoURL ? (
            <ProfilePhotoIcon url={user.photoURL} />
          ) : (
            <SvgIcon cursor={'pointer'} type={'Profile'} margin={'0px'} padding={'0px'} />
          )}

          <SvgIcon cursor={'pointer'} rotation={isOpen ? `0` : '180'} type={'Chevron'} margin={'0px'} padding={'0px'} />
        </FlexRow>
      </Override>
      {isOpen && <SettingsDropDown />}
    </>
  );
};

const SettingsDropDown = () => {
  const { theme } = useThemeContext();
  const { performLogOut } = useUserContext();

  return (
    <StyledSettingsDropDown>
      <FlexColumn align={'center'}>
        <Text
          padding={'0.25rem'}
          width={'100%'}
          centered={true}
          color={theme.primary.color}
          hoverColor={theme.primary.button.color}
          hoverBackground={theme.primary.button.backgroundColor}
          to={PROFILE}
        >
          Profile
        </Text>
        <Text
          padding={'0.25rem'}
          width={'100%'}
          centered={true}
          color={theme.primary.color}
          hoverColor={theme.primary.button.color}
          hoverBackground={theme.primary.button.backgroundColor}
          to={SETTINGS}
        >
          Settings
        </Text>
        <Text
          padding={'0.25rem'}
          width={'100%'}
          centered={true}
          color={theme.primary.color}
          hoverColor={theme.negative.color}
          hoverBackground={theme.primary.button.backgroundColor}
          onClick={performLogOut}
        >
          Log Out
        </Text>
      </FlexColumn>
    </StyledSettingsDropDown>
  );
};

const StyledSettingsDropDown = styled.div`
  display: block;
  position: absolute;
  transform: translateY(52px);
  width: 10rem;
  padding: 0.5rem;
  right: 0;
  background: #343334;
`;
