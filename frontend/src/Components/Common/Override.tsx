import styled from 'styled-components';

type OverrideProps = {
  readonly color?: string;
  readonly hoverColor?: string;
  readonly cursor?: string;
} & React.HTMLProps<HTMLDivElement>;

export const Override = styled.div.attrs(({ color, hoverColor, cursor }: OverrideProps) => ({
  color: color,
  hoverColor: hoverColor,
  cursor: cursor,
}))`
  > * {
    ${props => props.color && `color: ${props.color};`}
    &:hover {
      ${props => props.cursor && `cursor: ${props.cursor};`}
      ${props => props.hoverColor && `color: ${props.hoverColor};`}
    }
  }
`;
