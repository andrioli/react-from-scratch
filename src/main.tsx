import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as ReduxThunk from 'redux-thunk';
import Counter from './Counter';
import counter from './reducers/counter';

const store = Redux.createStore(counter,
  composeWithDevTools(Redux.applyMiddleware(ReduxThunk.default)));

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router>
      <Route
        path="/:name?"
        render={(routeProps) => {
          const name: string = routeProps.match.params.name || 'World';
          return <Counter name={name}/>;
        }}
      />
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root'),
);
