import { TodoAction } from '../actions/todo';
import Todo from '../models/Todo';

const todos = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;
