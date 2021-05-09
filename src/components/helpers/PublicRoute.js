import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import session from '../../utils/session';

function PublicRoute({ path, component: Component, ...restProps }) {
  return (
    <Route
      path={path}
      {...restProps}
      render={(props) => (path !== '/' && session.isAuthenticated() ? <Redirect to='/' /> : <Component {...props} />)}
    />
  );
}

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType
};

export default PublicRoute;
