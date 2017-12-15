import { createSelector } from 'reselect';
import * as Fuse from 'fuse.js';
import FUSE_OPTIONS from '../constants/fuseOptions';

const getIsFetching = state => state.plansState.isFetching;
export const getSearchTerm = state => state.plansState.searchTerm;
const getPlans = state => state.plansState.plans;

export const getLoadingStatus = createSelector(
  [getIsFetching],
  isFetching => isFetching,
);

export const getVisiblePlans = createSelector(
  [getSearchTerm, getPlans],
  (searchTerm, plans) => {
    if (searchTerm.length > 0) {
      const fuse = new Fuse(plans, FUSE_OPTIONS);
      const result = fuse.search(searchTerm);
      return result;
    }
    return plans;
  },
);
