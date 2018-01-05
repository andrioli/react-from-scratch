import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { setVisibilityFilter } from '../actions';
import { TodoApp, VisibilityFilter } from '../models';
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
