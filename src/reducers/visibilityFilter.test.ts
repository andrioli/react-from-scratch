import { setVisibilityFilter } from '../actions';
import { VisibilityFilter } from '../models';
import visibilityFilter from './visibilityFilter';

it('should set visibility filter correctly', () => {
  const stateBefore = VisibilityFilter.ShowAll;
  const action = setVisibilityFilter(VisibilityFilter.ShowCompleted);
  const stateAfter = VisibilityFilter.ShowCompleted;

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});
