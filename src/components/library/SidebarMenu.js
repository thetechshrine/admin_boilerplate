import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../config/colors';
import cssProperties from '../../config/css-properties';
import { fontSizes } from '../../config/sizes';

function UnStyledSidebarMenu({ className, icon, title, url, linkComponent, onClick }) {
  const LinkComponent = linkComponent;
  const Icon = icon;

  function handleClick(evt) {
    if (onClick) {
      evt.preventDefault();
      onClick();
    }
  }

  return (
    LinkComponent && (
      <LinkComponent to={url} url={url} className={className} onClick={handleClick}>
        <main>
          {Icon && <Icon />}
          <span className='title'>{title}</span>
        </main>
      </LinkComponent>
    )
  );
}

const StyledSidebarMenu = styled(UnStyledSidebarMenu)`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  > main {
    position: relative;
    padding: 1rem 1.75rem;
    display: flex;
    justify-content: ${getMainJustifyContent};
    align-items: center;
    transition: ${cssProperties.transition.button};
    color: ${colors.icon};

    ::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0;
      background: ${colors.sidebarMenu.active};
      transition: width 300ms ease-in-out;
    }

    > span.title {
      margin-left: ${getMainSpanMarginLeft};
      width: ${getMainSpanWidth};
      font-size: ${fontSizes.md};
      font-weight: 400;
      transition: width 500ms ease-in-out;
      overflow: hidden;
    }
  }

  :hover {
    > main {
      ::after {
        background: ${colors.sidebarMenu.hover};
        width: 100%;
      }
    }
  }

  &.active {
    > main {
      background: ${colors.sidebarMenu.active};
      color: ${colors.white};

      ::after {
        width: 100%;
      }

      > span.title {
        font-weight: 700;
      }
    }
  }
`;

function getMainJustifyContent({ shrinked }) {
  return shrinked ? 'center' : 'flex-start';
}

function getMainSpanWidth({ shrinked }) {
  return shrinked ? 0 : 'initial';
}

function getMainSpanMarginLeft({ shrinked }) {
  return shrinked ? 0 : '1rem';
}

export default function SidebarMenu({ shrinked = false, ...restProps }) {
  return <StyledSidebarMenu shrinked={shrinked} {...restProps} />;
}
SidebarMenu.propTypes = {
  shrinked: PropTypes.bool,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  linkComponent: PropTypes.elementType.isRequired,
  onClick: PropTypes.func
};
