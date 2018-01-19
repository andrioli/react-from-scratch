import * as React from 'react';

interface TodoProps {
  onToggleClick: () => void;
  completed: boolean;
  text: string;
}

const Todo = ({
  onToggleClick,
  completed,
  text,
}: TodoProps) => (
  <li
    className={completed ? 'completed' : ''}
  >
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onClick={onToggleClick}
      />
      <label>{text}</label>
    </div>
  </li>
);

export default Todo;
