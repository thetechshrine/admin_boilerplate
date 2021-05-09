import React from 'react';
import styled from 'styled-components';

import { bounce } from '../../config/animations';
import colors from '../../config/colors';

function UnStyledLoader({ className }) {
  return (
    <div className={className}>
      <div>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

const StyledLoader = styled(UnStyledLoader)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1.5rem;

    > span {
      background: ${getColor};
      border-radius: 50%;
      margin: 0 0.5rem;
      animation: ${bounce} 0.6s infinite alternate;

      :nth-child(2) {
        animation-delay: 0.2s;
      }

      :nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
`;

function getColor({ color }) {
  return colors[color];
}

export default function Loader({ size = 'md', color = 'gray', ...restProps }) {
  return <StyledLoader size={size} color={color} {...restProps} />;
}
