import * as React from 'react';
import Todo from '../models/Todo';
import TodoComponent from './Todo';

interface TodoListProps {
  todos: Todo[];
  onTodoClick: (id: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({
  todos,
  onTodoClick,
}) => (
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
