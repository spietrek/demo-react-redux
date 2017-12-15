import React from 'react';
import { connect } from 'react-redux';
import PageTemplate from '../components/common/PageTemplate';

const DocumentPageContainer = () => {
  const pageTitle = '[Document Page]';
  return (
    <PageTemplate pageTitle={pageTitle}>
      <p>This is where the document page content will go...</p>
    </PageTemplate>
  );
};

export default connect()(DocumentPageContainer);
