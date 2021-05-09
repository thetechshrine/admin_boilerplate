import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionDivider = styled.div`
  height: 2.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Section;
export { SectionDivider, SectionHeader };
