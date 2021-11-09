import styled from 'styled-components';

type ButtonProps = {
  onClick: () => any;
} & React.HTMLProps<HTMLButtonElement>;
export const Button = ({ onClick, children }: ButtonProps): JSX.Element => (
  <StyledButton
    onClick={() => {
      onClick();
    }}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  color: ${props => props.theme.primary.button.color};
  background-color: ${props => props.theme.primary.button.backgroundColor};
  border: 1px solid ${props => props.theme.transparent};
  margin: 0.5rem 0;
  outline: none;
  border-radius: 1rem;
  width: 100%;

  &:hover {
    border: 1px solid ${props => props.theme.primary.trim};
  }

  &:active {
    opacity: 0.75;
  }
`;

export const GoogleIDPButton = ({ onClick }: ButtonProps) => (
  <button className="login-with-google-btn" onClick={onClick}>
    Sign In With Google
  </button>
);
