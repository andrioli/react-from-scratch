import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { addTodo } from '../actions';
import { TodoApp } from '../models';

const AddTodo: React.SFC<ReactRedux.DispatchProp<TodoApp>> = ({
  dispatch,
}) => {
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
