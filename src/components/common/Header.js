import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PageTitle from './PageTitle';

const StyledHeader = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 180px);
`;

const Header = props => (
  <StyledHeader>
    <PageTitle title={props.title} />
    {props.children}
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: '',
  children: '',
};

export default Header;
