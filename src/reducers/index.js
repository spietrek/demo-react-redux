import { combineReducers } from 'redux';

import plansReducers from './plansReducers';

const rootReducers = combineReducers({
  plansState: plansReducers,
});

export default rootReducers;
