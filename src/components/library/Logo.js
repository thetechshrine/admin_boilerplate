import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import dimensions from '../../config/dimensions';

function UnStyledLogo({ className, shrinked, defaultView, shrinkedView }) {
  return <div className={className}>{shrinked ? isValidElement(shrinkedView) && shrinkedView : isValidElement(defaultView) && defaultView}</div>;
}

const StyledLogo = styled(UnStyledLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  min-height: ${dimensions.navbar.height};
`;

export default function Logo({ shrinked = false, ...restProps }) {
  return <StyledLogo shrinked={shrinked} {...restProps} />;
}
Logo.propTypes = {
  shrinked: PropTypes.bool,
  defaultView: PropTypes.element,
  shrinkedView: PropTypes.element
};
