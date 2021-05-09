import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../config/colors';
import { fontSizes } from '../../config/sizes';

function UnStyledText({ className, children }) {
  return <span className={className}>{children}</span>;
}

const StyledText = styled(UnStyledText)`
  display: ${getDisplay};
  color: ${getTextColor};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  letter-spacing: ${getLetterSpacing};
  text-align: ${getTextAlign};
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getTextColor({ color }) {
  return colors[color];
}

function getFontSize({ size }) {
  return fontSizes[size];
}

function getFontWeight({ weight }) {
  return weight;
}

function getLetterSpacing({ letterSpacing }) {
  return letterSpacing;
}

function getTextAlign({ align }) {
  return align;
}

export default function Text({
  fluid = false,
  color = 'text',
  size = 'md',
  weight = 400,
  letterSpacing = 'initial',
  align = 'initial',
  ...restProps
}) {
  return <StyledText fluid={fluid} color={color} size={size} weight={weight} letterSpacing={letterSpacing} align={align} {...restProps} />;
}
Text.propTypes = {
  color: PropTypes.oneOf(['text', 'gray', 'primary', 'secondary', 'white']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  weight: PropTypes.oneOf([400, 500, 600, 700, 800, 900]),
  letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string
};
