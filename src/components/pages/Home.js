import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styled from 'styled-components';

import { privateRoutes } from '../../routes';
import homePageViewModel from '../../utils/view_models/home-page.viewmodel';

import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
import Content from '../layout/Content';
import Navbar from '../layout/Navbar';
import Toggler from '../layout/Toggler';
import PrivateRoute from '../helpers/PrivateRoute';

function UnStyledHome({ className }) {
  return (
    <div className={className}>
      <Sidebar sidebarMenus={homePageViewModel.extractSidebarMenus(privateRoutes)} />
      <Toggler />
      <Main>
        <Navbar />
        <Content>{displayPrivateRoutes()}</Content>
      </Main>
    </div>
  );
}

function displayPrivateRoutes() {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
      {privateRoutes.map(({ key, path, component }) => (
        <PrivateRoute key={key} path={path} component={component} />
      ))}
    </Switch>
  );
}

const StyledHome = styled(UnStyledHome)`
  display: flex;
`;

export default function Home({ ...restProps }) {
  return <StyledHome {...restProps} />;
}
