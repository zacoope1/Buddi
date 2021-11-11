import { Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from '../Components/NavBar/NavBar';
import { useUserContext } from '../Contexts/UserContext';
import { HOME } from '../Routes';

type LayoutType = 'Default' | 'NoNavBar';

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
    <PageContainer>
      {layout === 'Default' ? (
        <>
          {isLoggedIn && <NavBar />}
          <DefaultPageLayout>
            <Route path={path} exact={exact} component={component} />
          </DefaultPageLayout>
        </>
      ) : (
        <DefaultPageLayout>
          <Route path={path} exact={exact} component={component} />
        </DefaultPageLayout>
      )}
    </PageContainer>
  );
};

const DefaultPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: auto;
  height: 100%;
  padding: 0 1rem;
  background: ${props => props.theme.primary.backgroundColor};
  color: ${props => props.theme.primary.color};
`;

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
