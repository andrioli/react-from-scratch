import * as Redux from 'redux';
import TodoApp from '../models/TodoApp';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = Redux.combineReducers<TodoApp>({
  todos,
  visibilityFilter,
});

export default todoApp;
