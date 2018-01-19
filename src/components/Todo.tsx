import * as React from 'react';

interface TodoProps {
  onToggleClick: () => void;
  onDeleteClick: () => void;
  completed: boolean;
  text: string;
}

const Todo = ({
  onToggleClick,
  onDeleteClick,
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
      <button className="destroy" onClick={onDeleteClick} />
    </div>
  </li>
);

export default Todo;
