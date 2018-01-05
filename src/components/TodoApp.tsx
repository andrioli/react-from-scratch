import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import { VisibilityFilter } from '../models';
import { getVisibilityFilter } from '../models/VisibilityFilter';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

interface TodoAppProps {
  match: ReactRouter.match<{
    filter: string;
  }>;
}

const TodoApp: React.SFC<TodoAppProps> = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={getVisibilityFilter(match.params.filter || VisibilityFilter.ShowAll)}
    />
    <Footer />
  </div>
);

export default TodoApp;
