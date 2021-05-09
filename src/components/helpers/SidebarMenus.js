import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import SidebarMenu from '../library/SidebarMenu';

function UnStyledSidebarMenus({ className, shrinked, sidebarMenus }) {
  return (
    <div className={className}>
      {sidebarMenus.map(({ icon, title, url }, index) => (
        <SidebarMenu key={index} shrinked={shrinked} icon={icon} title={title} url={url} linkComponent={NavLink} />
      ))}
    </div>
  );
}

const StyledSidebarMenus = styled(UnStyledSidebarMenus)`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export default function SidebarMenus({ shrinked = false, sidebarMenus = [], ...restProps }) {
  return <StyledSidebarMenus shrinked={shrinked} sidebarMenus={sidebarMenus} {...restProps} />;
}
SidebarMenus.propTypes = {
  shrinked: PropTypes.bool,
  sidebarMenus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  )
};
