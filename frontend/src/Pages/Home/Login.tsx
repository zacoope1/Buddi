import styled from 'styled-components';
import { useUserContext } from '../../Contexts/UserContext';

export const Login = (): JSX.Element => {
  const { performLogIn } = useUserContext();
  return (
    <StyledLoginPage>
      <button onClick={performLogIn}>Log In</button>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
