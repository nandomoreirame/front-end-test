import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { LoginPage, PropertiesPage, Error404Page } from './pages';
import { muiTheme } from './theme';
import { PrivateRoute } from './components/PrivateRoute';
import { PrivateLayout } from './components/PrivateLayout';

const browserHistory = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Router history={browserHistory}>
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <PrivateRoute path="/" component={PropertiesPage} layout={PrivateLayout} exact />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
