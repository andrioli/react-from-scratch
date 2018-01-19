import * as React from 'react';
import { VisibilityFilter } from '../models';
import FilterLink from './FilterLink';

const Footer = () => (
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
);

export default Footer;
