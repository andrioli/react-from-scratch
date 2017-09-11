import * as React from "react";

export interface IHelloProps {
  name: string;
}

export interface IHelloState {
  value: number;
}

export default class Hello extends React.Component<IHelloProps, IHelloState> {

  public state = {
    value: 0,
  };

  constructor(props: IHelloProps) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  public render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.state.value}</h2>
        <a href="#" onClick={this.increment}>++</a>
        &nbsp;
        <a href="#" onClick={this.decrement}>--</a>
      </div>
    );
  }

  private increment(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.setState((prev) => {
      return {
        value: prev.value + 1,
      };
    });
  }

  private decrement(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.setState((prev) => {
      return {
        value: prev.value - 1,
      };
    });
  }

}
