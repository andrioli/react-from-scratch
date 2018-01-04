import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import Todo from '../models/Todo';
import TodoApp from '../models/TodoApp';
import VisibilityFilter from '../models/VisibilityFilter';
import TodoList from './TodoList';

const getVisibleTodos = (
  todos: Todo[],
  filter: VisibilityFilter,
) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowActive:
      return todos.filter((t) => !t.completed);
    case VisibilityFilter.ShowCompleted:
      return todos.filter((t) => t.completed);
  }
};

interface VisibleTodoListProps {
  todos: Todo[];
  visibilityFilter: VisibilityFilter;
  onTodoClick: (id: number) => void;
}

const VisibleTodoList: React.SFC<VisibleTodoListProps> = ({
  todos,
  visibilityFilter,
  onTodoClick,
}) => (
  <TodoList
    todos={
      getVisibleTodos(todos, visibilityFilter)
    }
    onTodoClick={onTodoClick}
  />
);

const mapStateToProps = (state: TodoApp) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<TodoApp>) => ({
  onTodoClick(id: number) {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    });
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleTodoList);
