import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import State from '../models/TodoApp';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

interface TodoAppProps {
  onAddClick: (text: string) => void;
}

const TodoApp: React.SFC<TodoAppProps> = ({
  onAddClick,
}) => (
  <div>
    <AddTodo onAddClick={onAddClick} />
    <VisibleTodoList />
    <Footer />
  </div>
);

let nextTodoId = 0;
const mapDispatchToProps = (dispatch: Redux.Dispatch<State>) => ({
  onAddClick(text: string) {
    dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text,
    });
  },
});

export default ReactRedux.connect(
  null,
  mapDispatchToProps,
)(TodoApp);
