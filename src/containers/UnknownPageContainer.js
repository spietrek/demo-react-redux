import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTemplate from '../components/common/PageTemplate';

const Page404Container = ({ location }) => {
  const pageTitle = '[404 Page]';
  const message = `Resource not found at "${location.pathname}"`;
  return (
    <PageTemplate pageTitle={pageTitle}>
      <p>{message}</p>
    </PageTemplate>
  );
};

Page404Container.propTypes = {
  location: PropTypes.object.isRequired,
};

export default connect()(Page404Container);
