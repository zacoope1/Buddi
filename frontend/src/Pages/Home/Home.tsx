import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../Contexts/UserContext';
import { Login } from './Login';
import { useHistory } from 'react-router-dom';
import { PROFILE } from '../../Routes';
import { Button } from '../../Components/Common/Button';
import { Get } from '../../Services/HttpClient';

export const Home = (): JSX.Element => {
  const { isLoggedIn } = useUserContext();
  return isLoggedIn ? <StyledHomePage /> : <Login></Login>;
};

const HomeComponent = () => {
  const { user } = useUserContext();
  const history = useHistory();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    user && user.displayName === null && history.push(PROFILE);
  }, [history, user]);

  return (
    <>
      <h3>Welcome{user && `, ${user.displayName}`}!</h3>
      {user && (
        <>
          <Button
            onClick={async () => {
              Get('/user', await user.getIdToken()).then(res => setContent(res.data.message));
            }}
          >
            Get
          </Button>
          {content && <p>{content}</p>}
        </>
      )}
    </>
  );
};

const StyledHomePage = styled(HomeComponent)``;
