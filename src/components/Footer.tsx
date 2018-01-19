import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import { Todo, VisibilityFilter } from '../models';
import { getVisibleTodos } from '../reducers';
import FilterLink from './FilterLink';

interface FooterProps extends ReactRouter.RouteComponentProps<{}> {
  hidden: boolean;
  todosLeft: number;
}

const Footer = ({ hidden, todosLeft }: FooterProps) => (
  <footer className="footer" hidden={hidden}>
    <span className="todo-count"><strong>{todosLeft}</strong> {todosLeft === 1 ? 'item' : 'items'} left</span>
    <ul className="filters">
      <li>
        <FilterLink
          filter={VisibilityFilter.ShowAll}
        >
          All
        </FilterLink>
      </li>
      <li>
        <FilterLink
          filter={VisibilityFilter.ShowActive}
        >
          Active
        </FilterLink>
      </li>
      <li>
        <FilterLink
          filter={VisibilityFilter.ShowCompleted}
        >
          Completed
        </FilterLink>
      </li>
    </ul>
  </footer>
);

const mapStateToProps = (state: Todo[]) => ({
  hidden: state.length === 0,
  todosLeft: getVisibleTodos(state, VisibilityFilter.ShowActive).length,
});

export default ReactRouter.withRouter(
  ReactRedux.connect(mapStateToProps)(Footer),
);
