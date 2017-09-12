import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";

interface ICounterProps {
  name: string;
  value: number;
  onClickIncrement();
  onClickDecrement();
}

class Counter extends React.Component<ICounterProps, undefined> {

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

const mapStateToProps = (state: number) => {
  return {
    value: state,
  };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<number>) => {
  return {
    onClickIncrement: () => {
      dispatch({
        type: "INCREMENT",
      });
    },
    onClickDecrement: () => {
      dispatch({
        type: "DECREMENT",
      });
    },
  };
};

const Hello = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default Hello;
