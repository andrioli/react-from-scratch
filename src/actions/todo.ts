import v4 = require('uuid/v4');

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type ADD_TODO = typeof ADD_TODO;
export type TOGGLE_TODO = typeof TOGGLE_TODO;
export type EDIT_TODO = typeof EDIT_TODO;
export type DELETE_TODO = typeof DELETE_TODO;

export interface AddTodoAction {
  type: ADD_TODO;
  id: string;
  text: string;
}

export interface ToggleTodoAction {
  type: TOGGLE_TODO;
  id: string;
}

export interface EditTodoAction {
  type: EDIT_TODO;
  id: string;
  text: string;
}

export interface DeleteTodoAction {
  type: DELETE_TODO;
  id: string;
}

export const addTodo: (text: string) => AddTodoAction = (text) => ({
  type: ADD_TODO,
  id: v4(),
  text,
});

export const toggleTodo: (id: string) => ToggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const editTodo: (id: string, text: string) => EditTodoAction = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

export const deleteTodo: (id: string) => DeleteTodoAction = (id) => ({
  type: DELETE_TODO,
  id,
});

export type TodoAction = AddTodoAction |
                         ToggleTodoAction |
                         EditTodoAction |
                         DeleteTodoAction;
