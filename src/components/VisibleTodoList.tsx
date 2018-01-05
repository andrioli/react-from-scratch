import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import * as Redux from 'redux';
import { toggleTodo } from '../actions';
import { TodoApp } from '../models';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

type VisibleTodoListProps = ReactRouter.RouteComponentProps<{
  filter?: string;
}>;

const mapStateToProps = (state: TodoApp, ownProps: VisibleTodoListProps) => ({
  todos: getVisibleTodos(state, ownProps.match.params.filter),
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
