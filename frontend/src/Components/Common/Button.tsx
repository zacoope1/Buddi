import styled from 'styled-components';

type ButtonProps = {
  width?: string;
  height?: string;
  color?: string;
  trim?: string;
  backgroundColor?: string;
  onClick: () => any;
} & React.HTMLProps<HTMLButtonElement>;
export const Button = ({
  trim,
  backgroundColor,
  color,
  width,
  height,
  onClick,
  children,
}: ButtonProps): JSX.Element => (
  <StyledButton
    width={width}
    height={height}
    color={color}
    trim={trim}
    backgroundColor={backgroundColor}
    onClick={() => {
      onClick();
    }}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button.attrs((props: ButtonProps) => ({
  color: props.color,
  width: props.width,
  height: props.height,
  backgroundColor: props.backgroundColor,
  trim: props.trim,
}))`
  ${props => (props.width ? `width: ${props.width};` : 'width: 100%;')}
  ${props => props.height && `height: ${props.height};`}
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  color: ${props => (props.color ? props.color : props.theme.primary.button.color)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : props.theme.primary.button.backgroundColor};
  border: 1px solid ${props => props.theme.transparent};
  margin: 0.5rem 0;
  outline: none;
  border-radius: 90px;

  &:hover {
    border: 1px solid ${props => (props.trim ? props.trim : props.theme.primary.trim)};
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
