import * as React from 'react';
import { Todo } from '../models';
import TodoComponent from './Todo';

interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: string) => void;
}

const TodoList = ({
  todos,
  onTodoClick,
}: TodoListProps) => (
  <ul>
    {
      todos.map((todo) =>
        <TodoComponent
          key={todo.id}
          onClick={() => onTodoClick(todo.id)}
          {...todo}
        />,
      )
    }
  </ul>
);

export default TodoList;
