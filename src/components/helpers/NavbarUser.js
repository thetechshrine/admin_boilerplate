import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../config/colors';
import cssProperties from '../../config/css-properties';
import { getFirstChar } from '../../utils';

function UnStyledNavbarUser({ className, user }) {
  return (
    <div className={className}>
      <span>{getInitials(user)}</span>
    </div>
  );
}

function getInitials({ lastName = '', firstName = '' }) {
  return getFirstChar(firstName).concat(getFirstChar(lastName)).toUpperCase();
}

const StyledNavbarUser = styled(UnStyledNavbarUser)`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  cursor: pointer;
  transition: ${cssProperties.transition.button};

  :hover {
    background: ${colors.primaryLight};
  }
`;

export default function NavbarUser({ user = {}, ...restProps }) {
  return <StyledNavbarUser user={user} {...restProps} />;
}
NavbarUser.propTypes = {
  user: PropTypes.shape({
    lastName: PropTypes.string,
    firstName: PropTypes.string
  })
};
