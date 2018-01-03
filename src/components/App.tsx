import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import Counter from './containers/Counter';

const App = () => (
  <ReactRouter.BrowserRouter>
    <ReactRouter.Route
      path="/:name?"
      render={(routeProps) => {
        const name: string = routeProps.match.params.name || 'World';
        return <Counter name={name}/>;
      }}
    />
  </ReactRouter.BrowserRouter>
);

export default App;
