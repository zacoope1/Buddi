import { Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from '../Components/NavBar/NavBar';
import { useUserContext } from '../Contexts/UserContext';
import { HOME } from '../Routes';

type LayoutType = 'NavBar' | 'Default';

type RouteWrapperProps = {
  readonly path: string;
  readonly component: React.ComponentType<any>;
  readonly mustBeLoggedIn: boolean;
  readonly exact?: boolean;
  readonly layout?: LayoutType;
};

export const RouteWrapper = ({
  path,
  component,
  mustBeLoggedIn,
  exact = undefined,
  layout = 'Default',
}: RouteWrapperProps): JSX.Element => {
  const { isLoggedIn } = useUserContext();
  const history = useHistory();

  if (!isLoggedIn && mustBeLoggedIn) history.push(HOME);

  return (
    <PageLayout>
      {layout === 'Default' ? (
        <Route path={path} exact={exact} component={component} />
      ) : (
        <>
          <NavBar />
          <Route path={path} exact={exact} component={component} />
        </>
      )}
    </PageLayout>
  );
};

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.primary.backgroundColor};
  color: ${props => props.theme.primary.color};
`;
