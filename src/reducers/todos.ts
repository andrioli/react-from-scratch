import { TodoAppAction } from '../actions';
import { Todo } from '../models';

const todo = (state: Todo|undefined, action: TodoAppAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state!.id !== action.id) {
        return state;
      }

      return {
        ...state!,
        completed: !state!.completed,
      };
    default:
      return state;
  }
};

const todos = (state: Todo[] = [], action: TodoAppAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)!,
      ];
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action)!);
    default:
      return state;
  }
};

export default todos;
