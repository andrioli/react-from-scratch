import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Counter } from './Counter';

const noop = () => { /* do nothing */};

it('renders Counter without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Counter
      name="World"
      value={0}
      onClickIncrement={noop}
      onClickDecrement={noop}
    />
  ), div);
});
