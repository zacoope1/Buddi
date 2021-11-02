import styled from 'styled-components';
import { useUserContext } from '../../Contexts/UserContext';
import { Login } from './Login';

export const Home = (): JSX.Element => {
  const { isLoggedIn } = useUserContext();
  return isLoggedIn ? <StyledHomePage /> : <Login></Login>;
};

const HomeComponent = () => {
  const { user } = useUserContext();

  return (
    <>
      <text>Welcome{user && `, ${user.displayName}`}!</text>
    </>
  );
};

const StyledHomePage = styled(HomeComponent)``;
