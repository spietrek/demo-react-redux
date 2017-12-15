import * as types from '../constants/actionTypes';
import fetchPlans from '../api/fetchPlans';

const loadingIndicator = () => ({
  type: types.LOADING_INDICATOR,
  payload: true,
});

const receivePlans = plans => ({
  type: types.RECEIVE_PLANS,
  payload: plans,
});

export const actionFetchPlans = () => (dispatch, getState) => {
  dispatch(loadingIndicator());
  const { plans } = getState().plansState;
  if (plans.length > 0) {
    dispatch(receivePlans(plans));
  } else {
    fetchPlans().then(serverPlans => dispatch(receivePlans(serverPlans)));
  }
};

export const actionSearchPlans = term => ({
  type: types.SEARCH_PLANS,
  payload: term,
});
