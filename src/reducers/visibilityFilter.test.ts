import { SetVisibilityFilterAction } from '../actions/visibilityFilter';
import VisibilityFilter from '../models/VisibilityFilter';
import visibilityFilter from '../reducers/visibilityFilter';

it('should set visibility filter correctly', () => {
  const stateBefore = VisibilityFilter.ShowAll;
  const action: SetVisibilityFilterAction = {
    type: 'SET_VISIBILITY_FILTER',
    filter: VisibilityFilter.ShowCompleted,
  };
  const stateAfter = VisibilityFilter.ShowCompleted;

  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
});
