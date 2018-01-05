import * as React from 'react';
import { VisibilityFilter } from '../models';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter={VisibilityFilter.ShowAll}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter={VisibilityFilter.ShowActive}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter={VisibilityFilter.ShowCompleted}
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;
