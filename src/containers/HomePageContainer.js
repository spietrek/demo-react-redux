import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTemplate from '../components/common/PageTemplate';
import HomePage from '../components/HomePage';
import { actionFetchPlans, actionSearchPlans } from '../actions/plansActions';
import { getVisiblePlans, getLoadingStatus, getSearchTerm } from '../selectors/plansSelectors';

class HomePageContainer extends Component {
  static propTypes = {
    plans: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    actionFetchPlans: PropTypes.func.isRequired,
    actionSearchPlans: PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchTerm: ''
  }

  constructor() {
    super();
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.props.actionFetchPlans();
  }

  handleSearchChange(term) {
    this.props.actionSearchPlans(term);
  }

  render() {
    const { isFetching, plans, searchTerm } = this.props;
    const pageTitle = '[Dashboard]';
    return (
      <PageTemplate pageTitle={pageTitle}>
        {HomePage(isFetching, plans, searchTerm, this.handleSearchChange)}
      </PageTemplate>
    );
  }
}

const connectState = state => ({
  plans: getVisiblePlans(state),
  isFetching: getLoadingStatus(state),
  searchTerm: getSearchTerm(state),
});

const connectActions = {
  actionFetchPlans,
  actionSearchPlans,
};

export default connect(connectState, connectActions)(HomePageContainer);
