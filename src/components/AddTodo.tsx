import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { addTodo } from '../actions';
import { Todo } from '../models';

const AddTodo = ({
  dispatch,
}: ReactRedux.DispatchProp<Todo[]>) => {
  let input: HTMLInputElement;
  return (
    <div>
      <input
        ref={(e) => {
          input = e!;
        }}
      />
      <button
        onClick={() => {
          dispatch!(addTodo(input.value));
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default ReactRedux.connect()(AddTodo);
