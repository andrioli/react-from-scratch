import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from './containers/Counter';

const App = () => (
  <Router>
    <Route
      path="/:name?"
      render={(routeProps) => {
        const name: string = routeProps.match.params.name || 'World';
        return <Counter name={name}/>;
      }}
    />
  </Router>
);

export default App;
