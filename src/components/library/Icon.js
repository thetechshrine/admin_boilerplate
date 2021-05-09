import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { iconSizes } from '../../config/sizes';
import { joinClassNames } from '../../utils';

function UnStyledIcon({ className, variant, name }) {
  return <span className={joinClassNames(className, getClassName(variant))}>{name}</span>;
}

function getClassName(variant) {
  return { outlined: 'material-icons-outlined', filled: 'material-icons' }[variant];
}

const StyledIcon = styled(UnStyledIcon)`
  font-size: ${getFontSize};
`;

function getFontSize({ size }) {
  return iconSizes[size];
}

export default function Icon({ variant = 'outlined', size = 'md', ...restProps }) {
  return <StyledIcon variant={variant} size={size} {...restProps} />;
}
Icon.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'filled']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};
