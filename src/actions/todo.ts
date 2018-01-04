export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export type ADD_TODO = typeof ADD_TODO;
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export interface AddTodoAction {
  type: ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodoAction {
  type: TOGGLE_TODO;
  id: number;
}

let nextTodoId = 0;
export const addTodo: (text: string) => AddTodoAction = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo: (id: number) => ToggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export type TodoAction = AddTodoAction |
                         ToggleTodoAction;
