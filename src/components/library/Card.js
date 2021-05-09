import styled from 'styled-components';

import colors from '../../config/colors';
import cssProperties from '../../config/css-properties';

export default styled.div`
  border-radius: 5px;
  background: ${colors.white};
  box-shadow: ${cssProperties.boxShadow.md};
`;
