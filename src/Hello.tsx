import * as React from 'react';

export interface HelloProps {
  name: string;
}

export interface HelloState {
  value: number;
}

export default class Hello extends React.Component<HelloProps, HelloState> {

  state = {
    value: 0
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.state.value}</h2>
        <a href='#' onClick={e => this.increment(e)}>++</a>
        &nbsp;
        <a href='#' onClick={e => this.decrement(e)}>--</a>
      </div>
    );
  }

  increment(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.setState((prev) => {
      return {
        value: prev.value + 1
      };
    });
  }

  decrement(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.setState((prev) => {
      return {
        value: prev.value - 1
      };
    });
  }

}
