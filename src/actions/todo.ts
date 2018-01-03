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

export type TodoAction = AddTodoAction |
                         ToggleTodoAction;
