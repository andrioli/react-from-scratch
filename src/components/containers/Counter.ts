import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { decrement, increment } from '../../actions/counter';
import Counter from '../Counter';

const mapStateToProps = (state: number) => ({
  value: state,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<number>) => ({
  onClickIncrement() {
    dispatch(increment);
  },
  onClickDecrement() {
    dispatch(decrement);
  },
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
