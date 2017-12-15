import * as types from '../constants/actionTypes';
import initialState from './initialState';

const setLoadingIndicator = (state, action) => ({
  ...state,
  isFetching: action.payload,
});
const setReceivePlans = (state, action) => ({
  ...state,
  isFetching: false,
  plans: action.payload,
});
const setSearchPlans = (state, action) => ({
  ...state,
  searchTerm: action.payload,
});

const plansReducers = (state = initialState.plansInitialState, action) => {
  switch (action.type) {
    case types.LOADING_INDICATOR:
      return setLoadingIndicator(state, action);
    case types.RECEIVE_PLANS:
      return setReceivePlans(state, action);
    case types.SEARCH_PLANS:
      return setSearchPlans(state, action);
    default:
      return state;
  }
};

export default plansReducers;
