import React from 'react';
import LoadingContainer from './LoadingContainer';
import LoadingIndicator from './LoadingIndicator';

const Spinner = () => (
  <LoadingContainer>
    <LoadingIndicator />
  </LoadingContainer>
);

export default Spinner;
