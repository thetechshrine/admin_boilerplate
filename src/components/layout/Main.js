import React from 'react';
import styled from 'styled-components';

import dimensions from '../../config/dimensions';
import durations from '../../config/durations';
import { joinClassNames } from '../../utils';

import useLayout from '../hooks/useLayout';

function UnStyledMain({ className, children }) {
  const { sidebarState } = useLayout();

  return <main className={joinClassNames(className, getClassName(sidebarState))}>{children}</main>;
}

function getClassName(sidebarState) {
  return 'sidebar-'.concat(sidebarState).trim();
}

const StyledMain = styled(UnStyledMain)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: ${dimensions.sidebar.width.normal};
  transition: margin-left ${durations.sidebar.transition} ease;

  &.sidebar-expanded {
    margin-left: ${dimensions.sidebar.width.normal};
  }

  &.sidebar-shrinked {
    margin-left: ${dimensions.sidebar.width.shrinked};
  }
`;

export default function Main(props) {
  return <StyledMain {...props} />;
}
