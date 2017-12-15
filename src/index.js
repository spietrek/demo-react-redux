import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const rootElement = window.document.getElementById('root');
const store = configureStore();

const render = () => {
  ReactDOM.render(
    <React.Fragment>
      <Root store={store} />
    </React.Fragment>,
    rootElement,
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render();
  });
}

registerServiceWorker();
