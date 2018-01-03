import { TodoAppAction } from '../actions/todoApp';
import TodoApp from '../models/TodoApp';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = (state: TodoApp = {}, action: TodoAppAction) => {
  return {
    todos: todos(
      state.todos,
      action,
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action,
    ),
  };
};

export default todoApp;
