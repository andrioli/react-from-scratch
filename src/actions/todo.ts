export const ADD_TODO = 'ADD_TODO';

export type ADD_TODO = typeof ADD_TODO;

export interface AddTodoAction {
  type: ADD_TODO;
  id: number;
  text: string;
}

export type TodoAction = AddTodoAction;
