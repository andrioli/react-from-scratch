import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import { Todo, VisibilityFilter } from '../models';
import FilterLink from './FilterLink';

interface FooterProps extends ReactRouter.RouteComponentProps<{}> {
  hasTodos: boolean;
}

const Footer = ({ hasTodos }: FooterProps) => (
  <footer className="footer" hidden={!hasTodos}>
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
  hasTodos: state.length > 0,
});

export default ReactRouter.withRouter(
  ReactRedux.connect(mapStateToProps)(Footer),
);
