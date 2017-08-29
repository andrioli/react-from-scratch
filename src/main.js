import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import HelloTS from './HelloTS';

ReactDOM.render(
  <div>
    <Hello name='JavaScript Component'/>
    <br />
    <HelloTS name='TypeScript Component'/>
  </div>,
  document.getElementById('root')
);
