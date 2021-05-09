import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { publicRoutes } from '../routes';

import LayoutProvider from './providers/Layout';
import PublicRoute from './helpers/PublicRoute';

function App() {
  return (
    <LayoutProvider>
      <Router>{displayPublicRoutes()}</Router>
    </LayoutProvider>
  );
}

function displayPublicRoutes() {
  return (
    <Switch>
      {publicRoutes.map(({ key, path, component }) => (
        <PublicRoute key={key} path={path} component={component} />
      ))}
    </Switch>
  );
}

export default App;
