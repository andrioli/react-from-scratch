import * as React from 'react';

interface TodoProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo = ({
  onClick,
  completed,
  text,
}: TodoProps) => (
  <li
    className={completed ? 'completed' : ''}
    onClick={onClick}
  >
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} />
      <label>{text}</label>
    </div>
  </li>
);

export default Todo;
