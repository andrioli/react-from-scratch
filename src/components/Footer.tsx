import * as React from 'react';
import VisibilityFilter from '../models/VisibilityFilter';
import FilterLink from './FilterLink';

interface FooterProps {
  visibilityFilter: VisibilityFilter;
  onFilterClick: (filter: VisibilityFilter) => void;
}

const Footer: React.SFC<FooterProps> = ({
  visibilityFilter,
  onFilterClick,
}) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter={VisibilityFilter.ShowAll}
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter={VisibilityFilter.ShowActive}
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter={VisibilityFilter.ShowCompleted}
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;
