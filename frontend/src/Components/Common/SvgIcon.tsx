import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ReactComponent as Calendar } from '../../Assets/img/svg/Calendar.svg';
import { ReactComponent as Chat } from '../../Assets/img/svg/Chat.svg';
import { ReactComponent as Friends } from '../../Assets/img/svg/Friends.svg';
import { ReactComponent as House } from '../../Assets/img/svg/House.svg';
import { ReactComponent as Mail } from '../../Assets/img/svg/Mail.svg';
import { ReactComponent as Minus } from '../../Assets/img/svg/Minus.svg';
import { ReactComponent as Plus } from '../../Assets/img/svg/Plus.svg';
import { ReactComponent as Profile } from '../../Assets/img/svg/Profile.svg';
import { ReactComponent as Save } from '../../Assets/img/svg/Save.svg';
import { ReactComponent as Search } from '../../Assets/img/svg/Search.svg';
import { ReactComponent as Settings } from '../../Assets/img/svg/Settings.svg';
import { ReactComponent as X } from '../../Assets/img/svg/X.svg';
import { ReactComponent as Hamburger } from '../../Assets/img/svg/Hamburger.svg';

type SvgType =
  | 'Calendar'
  | 'Chat'
  | 'Friends'
  | 'House'
  | 'Mail'
  | 'Minus'
  | 'Plus'
  | 'Profile'
  | 'Save'
  | 'Search'
  | 'Settings'
  | 'X'
  | 'Hamburger';

type SvgIconProps = {
  readonly type: SvgType;
  readonly width?: string;
  readonly height?: string;
  readonly color?: string;
  readonly hoverColor?: string;
  readonly backgroundColor?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly to?: string;
  readonly onClick?: () => void;
} & React.HTMLProps<HTMLDivElement>;

export const SvgIcon = ({
  type,
  width,
  height,
  padding,
  margin,
  color,
  hoverColor,
  backgroundColor,
  to,
  onClick,
  children,
}: SvgIconProps): JSX.Element => {
  const history = useHistory();

  const goTo = (to: string) => history.push(to);

  const resolveIcon = (type: SvgType): JSX.Element => {
    switch (type) {
      case 'Calendar':
        return <Calendar />;
      case 'Chat':
        return <Chat />;
      case 'Friends':
        return <Friends />;
      case 'House':
        return <House />;
      case 'Mail':
        return <Mail />;
      case 'Minus':
        return <Minus />;
      case 'Plus':
        return <Plus />;
      case 'Profile':
        return <Profile />;
      case 'Save':
        return <Save />;
      case 'Search':
        return <Search />;
      case 'Settings':
        return <Settings />;
      case 'X':
        return <X />;
      case 'Hamburger':
        return <Hamburger />;
      default:
        return <Friends />;
    }
  };

  return (
    <StyledSvgIcon
      width={width}
      height={height}
      color={color}
      padding={padding}
      margin={margin}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      onClick={to ? () => goTo(to) : onClick}
    >
      {resolveIcon(type)}
      {children}
    </StyledSvgIcon>
  );
};

const StyledSvgIcon = styled.div.attrs(
  ({
    width = '1.5rem',
    height = '1.5rem',
    padding = '0.5rem',
    margin = '0.5rem',
    color = 'white',
    hoverColor,
    backgroundColor,
    to,
    onClick,
  }: SvgIconProps) => ({
    width: width,
    height: height,
    color: color,
    padding: padding,
    margin: margin,
    hoverColor: hoverColor,
    backgroundColor: backgroundColor,
    to: to,
    onClick: onClick,
  }),
)`
  cursor: ${props => (props.to || props.onClick ? `pointer` : `default`)};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}

  >* {
    width: ${props => props.width};
    height: ${props => props.height};
  }

  ${props =>
    props.hoverColor &&
    `
  &:hover {
    color: ${props.hoverColor};
    transition: 0.15s linear;
  }
  `}
`;
