import { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../Contexts/UserContext';
import {
  SignInWithEmailAndPassword,
  CreateEmailAndPasswordUser,
  SignInWithGoogle,
} from '../../Services/FirebaseService';
import { useHistory } from 'react-router-dom';
import { Button, GoogleIDPButton } from '../../Components/Common/Button';
import { TextButton } from '../../Components/Common/TextButton';
import { Text } from '../../Components/Common/Text';
import { FlexRow } from '../../Components/Common/Container';

export const Login = (): JSX.Element => {
  const { performLogIn } = useUserContext();
  const history = useHistory();
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleLogInWithGoogle = async () => {
    SignInWithGoogle()
      .then(credentials => performLogIn(credentials.user, true))
      .catch(() => history.push('/404'));
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      <StyledLoginPage>
        <Text margin={'1rem 0.5rem'} weight={'bold'} fontSize={'6rem'}>
          Buddi
        </Text>
        <StyledLoginPanel>
          <Text underlined={true} margin={'1rem 0.5rem'} weight={'bold'} fontSize={'3rem'}>
            {isRegister ? 'Sign Up' : 'Login'}
          </Text>
          {isRegister ? <RegisterForm /> : <EmailLoginForm />}
          <GoogleIDPButton onClick={handleLogInWithGoogle} />
          <TextButton onClick={toggleRegister}>
            {isRegister ? 'Already Have An Account?' : 'Sign Up With Email'}
          </TextButton>
        </StyledLoginPanel>
      </StyledLoginPage>
    </>
  );
};

const RegisterForm = (): JSX.Element => {
  const { performLogIn } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleRegisterUser = async () => {
    if (email.length <= 0 || password.length <= 0 || passwordConfirm.length <= 0) {
      setError('One or more fields are empty');
    } else if (password !== passwordConfirm) {
      setError('Passwords do not match.');
    } else {
      CreateEmailAndPasswordUser(email, password)
        .then(credentials => {
          performLogIn(credentials.user, false);
        })
        .catch(error => setError(error.message));
    }
  };

  return (
    <StyledForm>
      {error && error.length > 0 && <ErrorText>⚠️ {error}</ErrorText>}
      <StyledInput onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
      <StyledInput onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <StyledInput onChange={e => setPasswordConfirm(e.target.value)} type="password" placeholder="Confirm Password" />
      <Button onClick={handleRegisterUser}>Sign Up</Button>
    </StyledForm>
  );
};

const EmailLoginForm = (): JSX.Element => {
  const { performLogIn } = useUserContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false);

  const handleEmailLogin = async () => {
    if (email.length <= 0 || password.length <= 0) {
      setError('Email or Password field is empty!');
      return;
    }
    setError('');
    SignInWithEmailAndPassword(email, password, keepLoggedIn)
      .then(credentials => performLogIn(credentials.user, keepLoggedIn))
      .catch(error => setError(error.message));
  };

  return (
    <StyledForm>
      {error && error.length > 0 && <ErrorText>⚠️ {error}</ErrorText>}
      <StyledInput onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
      <StyledInput onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <FlexRow justify={'flex-start'} align={'center'}>
        <input
          onChange={e => {
            setKeepLoggedIn(e.target.checked);
          }}
          type="checkbox"
        />
        <Text weight={'bold'} fontSize={'0.75rem'}>
          Keep Me Logged In
        </Text>
      </FlexRow>
      <Button onClick={handleEmailLogin}>Sign In</Button>
    </StyledForm>
  );
};

const ErrorText = styled.div`
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

const StyledForm = styled.div`
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
