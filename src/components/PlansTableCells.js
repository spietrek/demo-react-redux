import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from './common/LinkButton';

const getPercentageCompleteBackgroundColor = value => {
  if (value > 75) {
    return '#77ba29';
  }
  if (value > 50) {
    return '#fffc33';
  }
  if (value > 25) {
    return '#ffbf00';
  }

  return '#ff0000';
};

const getPercentageCompleteColor = value => {
  if (value > 50 && value < 75) {
    return '#000';
  }

  return '#fff';
};

export const PercentageCompleteCell = props => {
  const { value } = props;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        borderRadius: '2px',
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: '100%',
          backgroundColor: getPercentageCompleteBackgroundColor(value),
          borderRadius: '2px',
          transition: 'all .2s ease-out',
          fontSize: '10px',
          textAlign: 'center',
          paddingTop: '1px',
          color: getPercentageCompleteColor(value),
        }}
      >
        {value}%
      </div>
    </div>
  );
};

PercentageCompleteCell.propTypes = {
  value: PropTypes.string,
};

PercentageCompleteCell.defaultProps = {
  value: '',
};

export const LinksCell = props => {
  const { original } = props;
  return (
    <React.Fragment>
      <span>
        <LinkButton href={original.editUrl} target="_blank">
          Edit
        </LinkButton>
      </span>
      <span>
        <LinkButton href={original.printUrl} target="_self">
          Print Plan
        </LinkButton>
      </span>
      <span>
        <LinkButton href={original.validationUrl} target="_self">
          Validation
        </LinkButton>
      </span>
    </React.Fragment>
  );
};

LinksCell.propTypes = {
  original: PropTypes.arrayOf(PropTypes.string),
};

LinksCell.defaultProps = {
  original: {},
};
