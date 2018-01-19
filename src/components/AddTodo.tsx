import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { addTodo } from '../actions';
import { Todo } from '../models';

const ENTER_KEY = 13;

const AddTodo = ({
  dispatch,
}: ReactRedux.DispatchProp<Todo[]>) => {
  let input: HTMLInputElement;
  let button: HTMLButtonElement;
  return (
    <div>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        ref={(e) => {
          input = e!;
        }}
        onKeyPress={(e) => {
          if (e.charCode === ENTER_KEY) {
            button.click();
          }
        }}
      />
      <button
        hidden={true}
        ref={(e) => {
          button = e!;
        }}
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
