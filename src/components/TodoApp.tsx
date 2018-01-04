import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import Todo from '../models/Todo';
import State from '../models/TodoApp';

interface TodoAppProps {
  todos: Todo[];
  onButtonClick: (text: string) => void;
}

class TodoApp extends React.Component<TodoAppProps> {

  private input: HTMLInputElement;

  public render() {
    return (
      <div>
        <input
          ref={(e) => {
            this.input = e!;
          }}
        />
        <button
          onClick={() => {
            this.props.onButtonClick(this.input.value);
            this.input.value = '';
          }}
        >
          Add Todo
        </button>
        <ul>
          {
            this.props.todos.map((todo) =>
              <li key={todo.id}>
                {todo.text}
              </li>,
            )
          }
        </ul>
      </div>
    );
  }

}

let nextTodoId = 0;

const mapStateToProps = (state: State) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<State>) => ({
  onButtonClick(text: string) {
    dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text,
    });
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);
