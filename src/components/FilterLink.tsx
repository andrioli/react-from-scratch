import * as React from 'react';
import * as ReactRedux from 'react-redux';
import TodoApp from '../models/TodoApp';
import VisibilityFilter from '../models/VisibilityFilter';

interface FilterLinkProps extends ReactRedux.DispatchProp<TodoApp> {
  filter: VisibilityFilter;
  currentFilter: VisibilityFilter;
}

const FilterLink: React.SFC<FilterLinkProps> = ({
  filter,
  currentFilter,
  dispatch,
  children,
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch!({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        });
      }}
    >
      {children}
    </a>
  );
};

export default ReactRedux.connect()(FilterLink);
