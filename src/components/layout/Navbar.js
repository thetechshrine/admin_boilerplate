import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

import colors from '../../config/colors';
import dimensions from '../../config/dimensions';
import cssProperties from '../../config/css-properties';
import zIndices from '../../config/z-indices';

import NavbarUser from '../helpers/NavbarUser';
import Icons from '../helpers/Icons';
import NavbarAction from '../helpers/NavbarAction';

function UnStyledNavbar({ className }) {
  return (
    <div className={className}>
      <main>
        <Dropdown icon={null} floating direction='left' trigger={<NavbarUser user={{ lastName: 'Wilfried', firstName: 'Noel' }} />}>
          <Dropdown.Menu>
            <Dropdown.Item text={<NavbarAction icon={Icons.UserIcon} title='Profile' />} />
            <Dropdown.Item text={<NavbarAction icon={Icons.LogoutIcon} title='Logout' />} />
          </Dropdown.Menu>
        </Dropdown>
      </main>
    </div>
  );
}

const StyledNavbar = styled(UnStyledNavbar)`
  position: sticky;
  top: 0;
  z-index: ${zIndices.navbar};
  height: ${dimensions.navbar.height};
  background: ${colors.white};
  box-shadow: ${cssProperties.boxShadow.sm};

  > main {
    height: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default function Navbar({ ...restProps }) {
  return <StyledNavbar {...restProps} />;
}
