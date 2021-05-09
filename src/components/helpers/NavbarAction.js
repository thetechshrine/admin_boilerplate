import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../config/colors';

import Text from '../library/Text';

function UnStyledNavbarAction({ className, icon, title }) {
  const Icon = icon;

  return (
    <span className={className}>
      <main>
        {Icon && <Icon />}
        <Text>{title}</Text>
      </main>
    </span>
  );
}

const StyledNavbarAction = styled(UnStyledNavbarAction)`
  > main {
    height: 100%;
    display: flex;
    align-items: center;
    color: ${colors.text};

    > span {
      margin-left: 0.5rem;
    }
  }
`;

export default function NavbarAction(props) {
  return <StyledNavbarAction {...props} />;
}
NavbarAction.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired
};
