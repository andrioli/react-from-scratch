import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { VisibilityFilter } from '../models';

interface FilterLinkProps {
  filter: VisibilityFilter;
  children: React.ReactNode;
}

const FilterLink = ({ filter, children }: FilterLinkProps) => (
  <NavLink
    to={filter === VisibilityFilter.ShowAll ? '/' : `/${filter}`}
    exact={true}
    activeClassName={'selected'}
  >
    {children}
  </NavLink>
);

export default FilterLink;
