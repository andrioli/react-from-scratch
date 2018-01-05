import * as Redux from 'redux';
import { TodoApp, VisibilityFilter } from '../models';
import todos, * as fromTodos from './todos';

const todoApp = Redux.combineReducers<TodoApp>({
  todos,
});

export default todoApp;

export const getVisibleTodos = (state: TodoApp, filter: VisibilityFilter) => {
  return fromTodos.getVisibleTodos(state.todos, filter);
};
