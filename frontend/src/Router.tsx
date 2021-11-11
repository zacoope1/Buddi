import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HOME, PROFILE, PAGE_NOT_FOUND } from './Routes';
import { useThemeContext } from './Contexts/ThemeContext';
import { DarkTheme, LightTheme } from './Components/Theme/Themes';
import { Home } from './Pages/Home/Home';
import { Profile } from './Pages/Profile';
import { RouteWrapper } from './Utilities/RouteWrapper';
import { UserContextProvider } from './Contexts/UserContext';
import { NotFound } from './Pages/404';

export const AppRouter = (): JSX.Element => {
  const { themeMode } = useThemeContext();

  const getTheme = () => (themeMode === 'DARK' ? DarkTheme : LightTheme);

  return (
    <ThemeProvider theme={getTheme()}>
      <UserContextProvider>
        <Router>
          <Switch>
            <RouteWrapper path={HOME} mustBeLoggedIn={false} exact component={Home} layout={'Default'} />
            <RouteWrapper path={PROFILE} mustBeLoggedIn={true} exact component={Profile} layout={'Default'} />
            <RouteWrapper path={PAGE_NOT_FOUND} mustBeLoggedIn={false} component={NotFound} layout={'NoNavBar'} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default AppRouter;
