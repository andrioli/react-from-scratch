import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { setVisibilityFilter } from '../actions/visibilityFilter';
import TodoApp from '../models/TodoApp';
import VisibilityFilter from '../models/VisibilityFilter';
import Link from './Link';

interface FilterLinkProps {
  filter: VisibilityFilter;
}

const mapStateToProps = (state: TodoApp, ownProps: FilterLinkProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<TodoApp>, ownProps: FilterLinkProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
