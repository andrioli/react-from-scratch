import * as React from "react";
import * as Redux from "redux";

export interface IHelloProps {
  name: string;
  store: Redux.Store<number>;
}

export default class Hello extends React.Component<IHelloProps, undefined> {

  private unsubscribe: Redux.Unsubscribe;

  constructor(props: IHelloProps) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  public componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  public render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.props.store.getState()}</h2>
        <a href="#" onClick={this.increment}>++</a>
        &nbsp;
        <a href="#" onClick={this.decrement}>--</a>
      </div>
    );
  }

  private increment(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.props.store.dispatch({
      type: "INCREMENT",
    });
  }

  private decrement(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.props.store.dispatch({
      type: "DECREMENT",
    });
  }

}
