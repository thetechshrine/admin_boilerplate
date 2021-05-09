import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';
import dimensions from '../../config/dimensions';
import durations from '../../config/durations';
import { joinClassNames } from '../../utils';
import { sidebarStates } from '../../utils/enums';

import useLayout from '../hooks/useLayout';
import SidebarMenus from '../helpers/SidebarMenus';
import Logo from '../library/Logo';
import Text from '../library/Text';

function UnStyledSidebar({ className, sidebarMenus }) {
  const { sidebarState, handleEnterSidebar, handleExitSidebar } = useLayout();

  return (
    <div className={joinClassNames(className, sidebarState)} onMouseEnter={handleEnterSidebar} onMouseLeave={handleExitSidebar}>
      <main>
        <Logo
          shrinked={sidebarState === sidebarStates.SHRINKED}
          defaultView={
            <Text size='xl' color='white' weight={700} letterSpacing='-1px'>
              Events+
            </Text>
          }
          shrinkedView={
            <Text size='xl' color='white' weight={700} letterSpacing='-1px'>
              E+
            </Text>
          }
        />
        <SidebarMenus shrinked={sidebarState === sidebarStates.SHRINKED} sidebarMenus={sidebarMenus} />
      </main>
    </div>
  );
}

const StyledSidebar = styled(UnStyledSidebar)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${getWidth};
  background: ${colors.primary};
  transition: width ${durations.sidebar.transition} ease;

  &.expanded {
    width: ${dimensions.sidebar.width.normal};
  }

  &.shrinked {
    width: ${dimensions.sidebar.width.shrinked};
  }

  > main {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`;

export default function Sidebar({ ...restProps }) {
  return <StyledSidebar {...restProps} />;
}

function getWidth() {
  return dimensions.sidebar.width.normal;
}
