import * as React from 'react';
import { Todo } from '../models';
import TodoComponent from './Todo';

interface TodoListProps {
  todos: Todo[];
  onToggleTodoClick: (id: string) => void;
  onToggleAllClick: () => void;
}

const isAllCompleted = (todos: Todo[]) => todos.map((t) => t.completed).indexOf(false) < 0;

const TodoList = ({
  todos,
  onToggleTodoClick,
  onToggleAllClick,
}: TodoListProps) => (
  <div>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      checked={isAllCompleted(todos)}
      onClick={onToggleAllClick}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {
        todos.map((todo) =>
          <TodoComponent
            key={todo.id}
            onToggleClick={() => onToggleTodoClick(todo.id)}
            {...todo}
          />,
        )
      }
    </ul>
  </div>
);

export default TodoList;
