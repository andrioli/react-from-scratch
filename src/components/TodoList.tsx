import * as React from 'react';
import { Todo } from '../models';
import TodoComponent from './Todo';

interface TodoListProps {
  todos: Todo[];
  hidden: boolean;
  isAllCompleted: boolean;
  onToggleTodoClick: (id: string) => void;
  onDeleteTodoClick: (id: string) => void;
  onToggleAllClick: () => void;
}

const TodoList = ({
  todos,
  hidden,
  isAllCompleted,
  onToggleTodoClick,
  onDeleteTodoClick,
  onToggleAllClick,
}: TodoListProps) => (
  <section className="main" hidden={hidden}>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      checked={isAllCompleted}
      onClick={onToggleAllClick}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {
        todos.map((todo) =>
          <TodoComponent
            key={todo.id}
            onToggleClick={() => onToggleTodoClick(todo.id)}
            onDeleteClick={() => onDeleteTodoClick(todo.id)}
            {...todo}
          />,
        )
      }
    </ul>
  </section>
);

export default TodoList;
