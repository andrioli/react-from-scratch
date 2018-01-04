import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import Todo from '../models/Todo';
import State from '../models/TodoApp';
import VisibilityFilter from '../models/VisibilityFilter';
import AddTodo from './AddTodo';
import FilterLink from './FilterLink';
import TodoList from './TodoList';

interface TodoAppProps {
  todos: Todo[];
  visibilityFilter: VisibilityFilter;
  onAddClick: (text: string) => void;
  onTodoClick: (id: number) => void;
}

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

class TodoApp extends React.Component<TodoAppProps> {

  public render() {
    const {
      todos,
      visibilityFilter,
      onAddClick,
      onTodoClick,
    } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo onAddClick={onAddClick} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={onTodoClick}
        />
        Show:
        {' '}
        <FilterLink
          filter={VisibilityFilter.ShowAll}
          currentFilter={visibilityFilter}
        >
          All
        </FilterLink>
        {' '}
        <FilterLink
          filter={VisibilityFilter.ShowActive}
          currentFilter={visibilityFilter}
        >
          Active
        </FilterLink>
        {' '}
        <FilterLink
          filter={VisibilityFilter.ShowCompleted}
          currentFilter={visibilityFilter}
        >
          Completed
        </FilterLink>
      </div>
    );
  }

}

let nextTodoId = 0;

const mapStateToProps = (state: State) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<State>) => ({
  onAddClick(text: string) {
    dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text,
    });
  },
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
)(TodoApp);
