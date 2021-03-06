import { TodoAppAction } from '../actions';
import { Todo, VisibilityFilter } from '../models';
import { getVisibilityFilter } from '../models/VisibilityFilter';

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
    case 'EDIT_TODO':
      if (state!.id !== action.id) {
        return state;
      }

      return {
        ...state!,
        text: action.text,
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
    case 'EDIT_TODO':
      return state.map((t) => todo(t, action)!);
    case 'DELETE_TODO':
      return state.filter((t) => t.id !== action.id);
    case 'TOGGLE_ALL':
      const completed = state.map((t) => t.completed).indexOf(false) >= 0;
      return state.map((t) => ({
        ...t, completed,
      }));
    case 'CLEAR_COMPLETED':
      return state.filter((t) => !t.completed);
    default:
      return state;
  }
};

export default todos;

export const getVisibleTodos = (state: Todo[], filter: string = VisibilityFilter.ShowAll) => {
  switch (getVisibilityFilter(filter)) {
    case VisibilityFilter.ShowAll:
      return state;
    case VisibilityFilter.ShowActive:
      return state.filter((t) => !t.completed);
    case VisibilityFilter.ShowCompleted:
      return state.filter((t) => t.completed);
  }
};
