import { keyframes } from 'styled-components';

export const bounce = keyframes`
  from {
    width: 0.1rem;
    height: 0.1rem;
    opacity: 1;
    transform: translate3d(0);
  }
  to {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;
