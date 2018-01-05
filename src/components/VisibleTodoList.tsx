import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { toggleTodo } from '../actions';
import { Todo, TodoApp, VisibilityFilter } from '../models';
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

const mapStateToProps = (state: TodoApp) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
  ),
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<TodoApp>) => ({
  onTodoClick(id: string) {
    dispatch(toggleTodo(id));
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
