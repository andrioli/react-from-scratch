import VisibilityFilter from '../models/VisibilityFilter';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export interface SetVisibilityFilterAction {
  type: SET_VISIBILITY_FILTER;
  filter: VisibilityFilter;
}

export type VisibilityFilterAction = SetVisibilityFilterAction;
