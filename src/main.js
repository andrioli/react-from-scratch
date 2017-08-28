import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Hello name='React'/>,
    document.getElementById('root')
  );
});
