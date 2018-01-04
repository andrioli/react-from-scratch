import * as React from 'react';

interface AddTodoProps {
  onAddClick: (text: string) => void;
}

const AddTodo: React.SFC<AddTodoProps> = ({
  onAddClick,
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
          onAddClick(input.value);
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
