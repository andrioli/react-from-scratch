import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import { Todo, VisibilityFilter } from '../models';
import FilterLink from './FilterLink';

interface FooterProps extends ReactRouter.RouteComponentProps<{}> {
  hidden: boolean;
}

const Footer = ({ hidden }: FooterProps) => (
  <footer className="footer" hidden={hidden}>
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
});

export default ReactRouter.withRouter(
  ReactRedux.connect(mapStateToProps)(Footer),
);
