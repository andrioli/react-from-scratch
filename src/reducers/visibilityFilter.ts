import { TodoAppAction } from '../actions/todoApp';
import VisivilityFilter from '../models/VisibilityFilter';

const visibilityFilter = (state = VisivilityFilter.ShowAll, action: TodoAppAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
