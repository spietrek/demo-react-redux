import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
