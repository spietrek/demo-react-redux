import React from 'react';
import PropTypes from 'prop-types';

const PlansTableDetails = props => {
  const { original } = props;
  return (
    <div style={{ padding: '20px' }}>
      <em>The plan details will go here!</em>
      <br />
      <em>Plan Number: {original.planNumber}</em>
      <br />
      <em>Plan Name: {original.planName}</em>
      <br />
    </div>
  );
};

PlansTableDetails.propTypes = {
  original: PropTypes.arrayOf(PropTypes.string),
};

PlansTableDetails.defaultProps = {
  original: {},
};

export default PlansTableDetails;
