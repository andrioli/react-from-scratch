import * as deepFreeze from 'deep-freeze';
import * as actions from '../actions';
import { Todo } from '../models';
import todos from './todos';

it('should add a Todo correctly', () => {
  const stateBefore: Todo[] = [];
  const action = actions.addTodo('Learn Redux');

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = todos(stateBefore, action);

  expect(stateAfter.length).toEqual(1);
  expect(stateAfter[0].id.length).toEqual(36);
  expect(stateAfter[0].text).toEqual('Learn Redux');
  expect(stateAfter[0].completed).toBeFalsy();
});

it ('should toggle a Todo correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = actions.toggleTodo('1');
  const stateAfter: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it ('should edit a Todo correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = actions.editTodo('1', 'Buy milk');
  const stateAfter: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: '1',
      text: 'Buy milk',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it ('should delete a Todo correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = actions.deleteTodo('0');
  const stateAfter: Todo[] = [
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it ('should toggle all Todos as complete correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: true,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = actions.toggleAll();
  const stateAfter: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: true,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it ('should toggle all Todos as incomplete correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: true,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: true,
    },
  ];
  const action = actions.toggleAll();
  const stateAfter: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it ('should clear all completed Todos correctly', () => {
  const stateBefore: Todo[] = [
    {
      id: '0',
      text: 'Learn Redux',
      completed: true,
    },
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = actions.clearCompleted();
  const stateAfter: Todo[] = [
    {
      id: '1',
      text: 'Go shopping',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
});
