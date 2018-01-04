import * as React from 'react';
import * as ReactRedux from 'react-redux';
import TodoApp from '../models/TodoApp';

let nextTodoId = 0;

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
          dispatch!({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value,
          });
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default ReactRedux.connect()(AddTodo);
