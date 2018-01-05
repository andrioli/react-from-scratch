import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import * as Redux from 'redux';
import { toggleTodo } from '../actions';
import { Todo, TodoApp, VisibilityFilter } from '../models';
import { getVisibilityFilter } from '../models/VisibilityFilter';
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

type VisibleTodoListProps = ReactRouter.RouteComponentProps<{
  filter: string;
}>;

const mapStateToProps = (state: TodoApp, ownProps: VisibleTodoListProps) => ({
  todos: getVisibleTodos(
    state.todos,
    getVisibilityFilter(ownProps.match.params.filter || VisibilityFilter.ShowAll),
  ),
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<TodoApp>) => ({
  onTodoClick(id: string) {
    dispatch(toggleTodo(id));
  },
});

export default ReactRouter.withRouter(ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList));
