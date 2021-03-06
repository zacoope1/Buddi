import styled from 'styled-components';

type FlexContainerProps = {
  readonly margin?: string;
  readonly padding?: string;
  readonly align?: string;
  readonly justify?: string;
} & React.HTMLProps<HTMLDivElement>;

export const FlexRow = ({
  margin = '0',
  padding = '0',
  justify = 'flex-start',
  align = 'flex-start',
  children,
}: FlexContainerProps): JSX.Element => (
  <StyledFlexRow margin={margin} padding={padding} justify={justify} align={align}>
    {children}
  </StyledFlexRow>
);

export const FlexColumn = ({
  margin = '0',
  padding = '0',
  justify = 'flex-start',
  align = 'flex-start',
  children,
}: FlexContainerProps): JSX.Element => (
  <StyledFlexColumn margin={margin} padding={padding} justify={justify} align={align}>
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
