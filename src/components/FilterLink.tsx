import * as React from 'react';
import VisibilityFilter from '../models/VisibilityFilter';

interface FilterLinkProps {
  filter: VisibilityFilter;
  currentFilter: VisibilityFilter;
  onClick: (filter: VisibilityFilter) => void;
}

const FilterLink: React.SFC<FilterLinkProps> = ({
  filter,
  currentFilter,
  onClick,
  children,
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
