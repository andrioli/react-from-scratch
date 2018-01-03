import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { decrement, increment } from './actions/counter';
import './Counter.scss';

interface CounterProps {
  name: string;
  value: number;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
}

export class Counter extends React.Component<CounterProps, any> {

  constructor(props: CounterProps) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  public render() {
    return (
      <div>
        <Helmet>
          <title>Counter for {this.props.name}</title>
        </Helmet>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.props.value}</h2>
        <a href="#" onClick={this.increment}>++</a>
        &nbsp;
        <a href="#" onClick={this.decrement}>--</a>
      </div>
    );
  }

  private increment(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.props.onClickIncrement();
  }

  private decrement(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.props.onClickDecrement();
  }

}

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
