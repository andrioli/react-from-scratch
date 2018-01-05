import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import * as Redux from 'redux';
import { toggleTodo } from '../actions';
import { TodoApp, VisibilityFilter } from '../models';
import { getVisibilityFilter } from '../models/VisibilityFilter';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

type VisibleTodoListProps = ReactRouter.RouteComponentProps<{
  filter: string;
}>;

const mapStateToProps = (state: TodoApp, ownProps: VisibleTodoListProps) => ({
  todos: getVisibleTodos(
    state, getVisibilityFilter(ownProps.match.params.filter || VisibilityFilter.ShowAll),
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
