import { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../Contexts/UserContext';
import { firebaseAuth, auth } from '../../Services/FirebaseService';
import { useHistory } from 'react-router-dom';
import { Button } from '../../Components/Common/Button';

export const Login = (): JSX.Element => {
  const { performLogIn } = useUserContext();
  const history = useHistory();

  const handleLogInWithGoogle = async () => {
    const provider = new firebaseAuth.GoogleAuthProvider();
    firebaseAuth
      .signInWithPopup(auth, provider)
      .then(credentials => performLogIn(credentials.user))
      .catch(() => history.push('/404'));
  };

  return (
    <StyledLoginPage>
      <StyledLoginPanel>
        <h1>Login</h1>
        <EmailLoginForm />
        <Button onClick={handleLogInWithGoogle}>Sign In With Google</Button>
      </StyledLoginPanel>
    </StyledLoginPage>
  );
};

const EmailLoginForm = (): JSX.Element => {
  const { performLogIn } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailLogin = async () => {
    if (email.length <= 0 || password.length <= 0) {
      setError('Email or Password field is empty!');
      return;
    }
    setError('');
    await firebaseAuth
      .signInWithEmailAndPassword(auth, email, password)
      .then(credentials => performLogIn(credentials.user))
      .catch(error => setError(error.message));
  };

  return (
    <>
      <StyledLoginForm>
        {error && error.length > 0 && <ErrorText>⚠️ {error}</ErrorText>}
        <StyledInput onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <StyledInput onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        <Button onClick={handleEmailLogin}>Sign In</Button>
      </StyledLoginForm>
    </>
  );
};

const ErrorText = styled.text`
  color: tomato;
  font-size: 0.75rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 1rem;
  height: 1.5rem;
  width: 90%;
  outline: none;
  transition: all 0.8s;
  color: ${props => props.theme.primary.color};
  background-color: ${props => props.theme.secondary.backgroundColor};

  &::placeholder {
    font-weight: bolder;
    color: ${props => props.theme.primary.color};
  }

  &:focus {
    width: 100%;
    border: 1.5px solid ${props => props.theme.primary.trim};
  }
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  background: ${props => props.theme.secondary.color};
  padding: 2rem;
  border-radius: 1rem;
`;

const StyledLoginPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
