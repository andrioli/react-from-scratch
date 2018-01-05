import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import TodoApp from './TodoApp';

const App = () => (
  <ReactRouter.BrowserRouter>
    <ReactRouter.Route
      path="/:filter?"
      component={TodoApp}
    />
  </ReactRouter.BrowserRouter>
);

export default App;
