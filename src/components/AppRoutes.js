import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../containers/HomePageContainer';
import DocumentPageContainer from '../containers/DocumentPageContainer';
import UnknownPageContainer from '../containers/UnknownPageContainer';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

/* eslint-disable react/prop-types */
const PropsRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => renderMergedProps(component, routeProps, rest)}
  />
);
/* eslint-enable react/prop-types */

const AppRoutes = props => (
  <HashRouter>
    <React.Fragment>
      <Switch>
        <PropsRoute
          exact
          name="HomePage"
          path="/"
          component={HomePageContainer}
          {...props}
        />
        <PropsRoute
          name="DocumentPage"
          path="/document"
          component={DocumentPageContainer}
          {...props}
        />
        <PropsRoute component={UnknownPageContainer} {...props} />
      </Switch>
    </React.Fragment>
  </HashRouter>
);

export default AppRoutes;
