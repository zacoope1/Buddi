import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HOME, LOGIN, PROFILE } from './Routes';
import { useThemeContext } from './Contexts/ThemeContext';
import { DarkTheme, LightTheme } from './Components/Theme/Themes';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { RouteWrapper } from './Utilities/RouteWrapper';
import { Login } from './Pages/Login';

export const AppRouter = (): JSX.Element => {
  const { themeMode } = useThemeContext();

  const getTheme = () => (themeMode === 'DARK' ? DarkTheme : LightTheme);

  return (
    <ThemeProvider theme={getTheme()}>
      <Router>
        <Switch>
          <RouteWrapper path={LOGIN} exact component={Login} />
          <RouteWrapper path={HOME} exact component={Home} layout={'NavBar'} />
          <RouteWrapper path={PROFILE} exact component={Profile} layout={'NavBar'} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
