import { setVisibilityFilter } from '../actions/visibilityFilter';
import VisibilityFilter from '../models/VisibilityFilter';
import visibilityFilter from '../reducers/visibilityFilter';

it('should set visibility filter correctly', () => {
  const stateBefore = VisibilityFilter.ShowAll;
  const action = setVisibilityFilter(VisibilityFilter.ShowCompleted);
  const stateAfter = VisibilityFilter.ShowCompleted;

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});
