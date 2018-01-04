import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import Todo from '../models/Todo';
import State from '../models/TodoApp';
import VisibilityFilter from '../models/VisibilityFilter';
import FilterLink from './FilterLink';
import TodoComponent from './Todo';

interface TodoAppProps {
  todos: Todo[];
  visibilityFilter: VisibilityFilter;
  onButtonClick: (text: string) => void;
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

  private input: HTMLInputElement;

  public render() {
    const {
      todos,
      visibilityFilter,
      onButtonClick,
      onTodoClick,
    } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <input
          ref={(e) => {
            this.input = e!;
          }}
        />
        <button
          onClick={() => {
            onButtonClick(this.input.value);
            this.input.value = '';
          }}
        >
          Add Todo
        </button>
        <ul>
          {
            visibleTodos.map((todo) =>
              <TodoComponent
                key={todo.id}
                onClick={() => onTodoClick(todo.id)}
                completed={todo.completed}
                text={todo.text}
              />,
            )
          }
        </ul>
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
  onButtonClick(text: string) {
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
