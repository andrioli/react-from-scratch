import * as deepFreeze from 'deep-freeze';
import { AddTodoAction, ToggleTodoAction } from '../actions/todo';
import Todo from '../models/Todo';
import todos from './todos';

it('should add a Todo correctly', () => {
  const stateBefore: Todo[] = [];
  const action: AddTodoAction = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux',
  };
  const stateAfter: Todo[] = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it ('should toggle a Todo correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action: ToggleTodoAction = {
    type: 'TOGGLE_TODO',
    id: 1,
  };
  const stateAfter: Todo[] = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});
