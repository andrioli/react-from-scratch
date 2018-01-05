import { TodoAppAction } from '../actions';
import { VisibilityFilter } from '../models';

const visibilityFilter = (state = VisibilityFilter.ShowAll, action: TodoAppAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
