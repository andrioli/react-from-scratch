import * as React from 'react';

export interface HelloProps {
  name: string;
}

export default class HelloTS extends React.Component<HelloProps, undefined> {

  render() {
    return (<span>Hello, {this.props.name}!</span>);
  }

}
