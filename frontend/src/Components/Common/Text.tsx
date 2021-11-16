import { useHistory } from 'react-router';
import styled from 'styled-components';

const EMPTY_FUNCTION = () => {};

type TextProps = {
  readonly color?: string;
  readonly fontSize?: string;
  readonly weight?: string;
  readonly margin?: string;
  readonly padding?: string;
  readonly width?: string;
  readonly centered?: boolean;
  readonly underlined?: boolean;
  readonly animation?: string;
  readonly hoverColor?: string;
  readonly hoverBackground?: string;
  readonly to?: string;
  readonly onClick?: () => void;
} & React.HTMLProps<HTMLDivElement>;

export const Text = ({
  color = '',
  weight = '400',
  margin = '0.5rem',
  padding = '0rem',
  underlined = false,
  fontSize = '16px',
  centered,
  width,
  hoverColor,
  hoverBackground,
  animation,
  to,
  onClick = EMPTY_FUNCTION,
  children,
}: TextProps): JSX.Element => {
  const history = useHistory();

  return (
    <CustomText
      onClick={to ? () => history.push(to) : onClick}
      color={color}
      hoverColor={hoverColor}
      hoverBackground={hoverBackground}
      fontSize={fontSize}
      weight={weight}
      width={width}
      centered={centered}
      margin={margin}
      padding={padding}
      underlined={underlined}
      animation={animation}
    >
      {children}
    </CustomText>
  );
};

const CustomText = styled.div.attrs((props: TextProps) => ({
  color: props.color,
  fontSize: props.fontSize,
  weight: props.weight,
  underlined: props.underlined,
  hoverColor: props.hoverColor,
  hoverBackground: props.hoverBackground,
  margin: props.margin,
  padding: props.padding,
  width: props.width,
  centered: props.centered,
  animation: props.animation,
  onClick: props.onClick,
}))`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${props => props.underlined && `text-decoration: underline;`}
  ${props => props.onClick !== EMPTY_FUNCTION && `cursor: pointer; color: #0000EE;`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.centered && `text-align: center;`}

  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.weight};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ${props => props.animation && `animation: ${props.animation};`}

  &:hover {
    ${props => props.hoverColor && `color: ${props.hoverColor};`}
    ${props => props.hoverBackground && `background-color: ${props.hoverBackground};`}
  }
`;
