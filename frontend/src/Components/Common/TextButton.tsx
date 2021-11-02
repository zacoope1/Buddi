import styled from 'styled-components';

type TextButtonProps = {
  onClick: () => any;
} & React.HTMLProps<HTMLButtonElement>;
export const TextButton = ({ onClick, children }: TextButtonProps): JSX.Element => (
  <StyledTextButton
    onClick={() => {
      onClick();
    }}
  >
    {children}
  </StyledTextButton>
);

const StyledTextButton = styled.div`
  cursor: pointer;
  font-weight: 600;
  padding: 0.25rem 0rem;
  color: ${props => props.theme.primary.color};
  text-decoration: underline;
  text-align: center;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    color: ${props => props.theme.mono.black};
  }
`;
