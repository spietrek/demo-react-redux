import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Header from './Header';
import PageContent from './PageContent';

const PageTemplate = props => (
  <Container>
    <Header title={props.pageTitle} />
    <PageContent displayBlock="true">{props.children}</PageContent>
  </Container>
);

PageTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node
};

PageTemplate.defaultProps = {
  children: null
};

export default PageTemplate;
