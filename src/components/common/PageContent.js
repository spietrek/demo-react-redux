import styled from 'styled-components';

const PageContent = styled.div`
  display: ${props => (props.displayBlock ? 'block' : 'flex')};
  flex-wrap: wrap;
  min-height: calc(100vh - 164px);
`;

export default PageContent;
