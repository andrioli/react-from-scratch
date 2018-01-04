import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import TodoApp from '../models/TodoApp';
import VisibilityFilter from '../models/VisibilityFilter';
import Link from './Link';

interface FilterLinkProps {
  filter: VisibilityFilter;
  currentFilter: VisibilityFilter;
  onClick: (filter: VisibilityFilter) => void;
}

const FilterLink: React.SFC<FilterLinkProps> = ({
  filter,
  currentFilter,
  onClick,
  children,
}) => {
  return (
    <Link
      active={filter === currentFilter}
      onClick={() => onClick(filter)}
    >
      {children}
    </Link>
  );
};

const mapStateToProps = (state: TodoApp) => ({
  currentFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<TodoApp>) => ({
  onClick(filter: VisibilityFilter) {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter,
    });
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);
