import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';

function UnStyledContent({ className, children }) {
  return <div className={className}>{children}</div>;
}

const StyledContent = styled(UnStyledContent)`
  background: ${colors.content};
  padding: 2rem;
  flex: 1;
`;

export default function Content({ ...restProps }) {
  return <StyledContent {...restProps} />;
}
