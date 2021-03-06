import styled from 'styled-components';

const EMPTY_FUNCTION = () => {};

type TextProps = {
  readonly color?: string;
  readonly fontSize?: string;
  readonly weight?: string;
  readonly margin?: string;
  readonly underlined?: boolean;
  readonly onClick?: () => void;
} & React.HTMLProps<HTMLDivElement>;

export const Text = ({
  color = '',
  weight = '400',
  margin = '0.5rem',
  underlined = false,
  fontSize = '16px',
  onClick = EMPTY_FUNCTION,
  children,
}: TextProps): JSX.Element => (
  <CustomText
    onClick={onClick}
    color={color}
    fontSize={fontSize}
    weight={weight}
    margin={margin}
    underlined={underlined}
  >
    {children}
  </CustomText>
);

const CustomText = styled.div.attrs((props: TextProps) => ({
  color: props.color,
  fontSize: props.fontSize,
  weight: props.weight,
  underlined: props.underlined,
  margin: props.margin,
  onClick: props.onClick,
}))`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};
  margin: ${props => props.margin};
  ${props => (props.underlined || props.onClick !== EMPTY_FUNCTION) && `text-decoration: underline;`}
  ${props => props.onClick !== EMPTY_FUNCTION && `cursor: pointer; color: #0000EE;`}
`;
