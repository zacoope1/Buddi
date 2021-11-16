import styled from 'styled-components';

export type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItemsType = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

type FlexContainerProps = {
  readonly margin?: string;
  readonly padding?: string;
  readonly align?: AlignItemsType | JustifyContentType;
  readonly justify?: JustifyContentType | AlignItemsType;
  readonly onClick?: () => void;
} & React.HTMLProps<HTMLDivElement>;

export const FlexRow = ({
  margin = '0',
  padding = '0',
  justify = 'flex-start',
  align = 'flex-start',
  children,
  onClick,
}: FlexContainerProps): JSX.Element => (
  <StyledFlexRow onClick={onClick} margin={margin} padding={padding} justify={justify} align={align}>
    {children}
  </StyledFlexRow>
);

export const FlexColumn = ({
  margin = '0',
  padding = '0',
  justify = 'flex-start',
  align = 'flex-start',
  onClick,
  children,
}: FlexContainerProps): JSX.Element => (
  <StyledFlexColumn onClick={onClick} margin={margin} padding={padding} justify={justify} align={align}>
    {children}
  </StyledFlexColumn>
);

const StyledFlexRow = styled.div.attrs((props: FlexContainerProps) => ({
  margin: props.margin,
  padding: props.padding,
  justify: props.justify,
  align: props.align,
}))`
  display: flex;
  flex-direction: row;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;
const StyledFlexColumn = styled.div.attrs((props: FlexContainerProps) => ({
  margin: props.margin,
  padding: props.padding,
  justify: props.justify,
  align: props.align,
}))`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;
