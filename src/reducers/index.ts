import * as Redux from 'redux';
import { TodoApp } from '../models';
import todos from './todos';

const todoApp = Redux.combineReducers<TodoApp>({
  todos,
});

export default todoApp;
