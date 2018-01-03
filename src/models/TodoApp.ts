import Todo from './Todo';
import VisibilityFilter from './VisibilityFilter';

interface TodoApp {
  todos?: Todo[];
  visibilityFilter?: VisibilityFilter;
}

export default TodoApp;
