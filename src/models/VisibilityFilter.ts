enum VisibilityFilter {
  ShowAll = 'all',
  ShowActive = 'active',
  ShowCompleted = 'completed',
}

export function getVisibilityFilter(filter: string) {
  switch (filter) {
    case VisibilityFilter.ShowActive:
      return VisibilityFilter.ShowActive;
    case VisibilityFilter.ShowCompleted:
      return VisibilityFilter.ShowCompleted;
    case VisibilityFilter.ShowAll:
      return VisibilityFilter.ShowAll;
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}

export default VisibilityFilter;
