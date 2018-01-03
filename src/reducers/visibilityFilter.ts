import { VisibilityFilterAction } from '../actions/visibilityFilter';
import VisivilityFilter from '../models/VisibilityFilter';

const visibilityFilter = (state = VisivilityFilter.ShowAll, action: VisibilityFilterAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
