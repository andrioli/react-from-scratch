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

  public render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.state.value}</h2>
        <a href="#" onClick={(e) => this.increment(e)}>++</a>
        &nbsp;
        <a href="#" onClick={(e) => this.decrement(e)}>--</a>
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
