import * as Redux from 'redux';
import { TodoApp } from '../models';
import todos, * as fromTodos from './todos';

const todoApp = Redux.combineReducers<TodoApp>({
  todos,
});

export default todoApp;

export const getVisibleTodos = (state: TodoApp, filter?: string) => {
  return fromTodos.getVisibleTodos(state.todos, filter);
};
