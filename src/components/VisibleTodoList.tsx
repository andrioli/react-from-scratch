import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import * as Redux from 'redux';
import { deleteTodo, toggleAll, toggleTodo } from '../actions';
import { Todo } from '../models';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

type VisibleTodoListProps = ReactRouter.RouteComponentProps<{
  filter?: string;
}>;

const mapStateToProps = (state: Todo[], ownProps: VisibleTodoListProps) => ({
  todos: getVisibleTodos(state, ownProps.match.params.filter),
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<Todo[]>) => ({
  onToggleTodoClick(id: string) {
    dispatch(toggleTodo(id));
  },
  onDeleteTodoClick(id: string) {
    dispatch(deleteTodo(id));
  },
  onToggleAllClick() {
    dispatch(toggleAll());
  },
});

export default ReactRouter.withRouter(ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList));
