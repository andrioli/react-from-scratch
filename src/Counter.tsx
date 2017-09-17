import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";

interface ICounterProps {
  name: string;
  value: number;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
}

class Counter extends React.Component<ICounterProps, any> {

  constructor(props: ICounterProps) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  public render() {
    return (
      <div>
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

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementAction = () => ({
  type: INCREMENT,
});

const decrementAction = () => ({
  type: DECREMENT,
});

const increment = (dispatch: Redux.Dispatch<number>) => {
  dispatch(incrementAction());
};

const decrement = (dispatch: Redux.Dispatch<number>) => {
  dispatch(decrementAction());
};

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
