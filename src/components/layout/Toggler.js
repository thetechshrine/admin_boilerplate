import React from 'react';
import styled from 'styled-components';

import colors from '../../config/colors';
import dimensions from '../../config/dimensions';
import cssProperties from '../../config/css-properties';
import zIndices from '../../config/z-indices';
import { joinClassNames } from '../../utils';
import { sidebarStates } from '../../utils/enums';

import Icons from '../helpers/Icons';
import useLayout from '../hooks/useLayout';
import durations from '../../config/durations';

function UnStyledToggler({ className }) {
  const { sidebarState, togglerVisible, toggleSidebar, handleEnterToggler, handleExitToggler } = useLayout();

  return (
    <div
      className={joinClassNames(className, getClassNames(sidebarState, togglerVisible))}
      onMouseEnter={handleEnterToggler}
      onMouseLeave={handleExitToggler}
    >
      <span onClick={toggleSidebar}>{displayArrow(sidebarState)}</span>
    </div>
  );
}

function displayArrow(sidebarState) {
  return sidebarState === sidebarStates.SHRINKED ? <Icons.ArrowRightIcon size={24} /> : <Icons.ArrowLeftIcon size={24} />;
}

function getClassNames(sidebarState, toggleVisible) {
  const classNames = [];
  classNames.push(toggleVisible ? 'shown' : 'hidden');
  classNames.push('sidebar-'.concat(sidebarState).trim());

  return classNames.join(' ');
}

const StyledToogler = styled(UnStyledToggler)`
  position: fixed;
  left: ${dimensions.sidebar.width.normal};
  z-index: ${zIndices.toggler};
  transition: left ${durations.sidebar.transition} ease, opacity 200ms ease-in-out;

  &.shown {
    opacity: 1;
  }

  &.hidden {
    opacity: 0;
  }

  &.sidebar-expanded {
    left: ${dimensions.sidebar.width.normal};
  }

  &.sidebar-shrinked {
    left: ${dimensions.sidebar.width.shrinked};
  }

  > span {
    background: ${colors.primary};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    top: calc((${dimensions.navbar.height}) - (1.25rem + 2px));
    left: -1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    font-size: 24px;
    cursor: pointer;
    transition: ${cssProperties.transition.button};

    :hover {
      background: ${colors.primaryLight};
    }
  }
`;

export default function Toggler({ ...restProps }) {
  return <StyledToogler {...restProps} />;
}
