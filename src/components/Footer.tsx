import * as React from 'react';
import VisibilityFilter from '../models/VisibilityFilter';
import FilterLink from './FilterLink';

interface FooterProps {
  visibilityFilter: VisibilityFilter;
}

const Footer: React.SFC<FooterProps> = ({
  visibilityFilter,
}) => (
  <p>
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
  </p>
);

export default Footer;
