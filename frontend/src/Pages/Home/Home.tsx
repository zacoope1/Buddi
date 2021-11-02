import { useEffect } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../Contexts/UserContext';
import { Login } from './Login';
import { useHistory } from 'react-router-dom';
import { PROFILE } from '../../Routes';

export const Home = (): JSX.Element => {
  const { isLoggedIn } = useUserContext();
  return isLoggedIn ? <StyledHomePage /> : <Login></Login>;
};

const HomeComponent = () => {
  const { user } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    user && user.displayName === null && history.push(PROFILE);
  }, [history, user]);

  return (
    <>
      <h3>Welcome{user && `, ${user.displayName}`}!</h3>
    </>
  );
};

const StyledHomePage = styled(HomeComponent)``;
