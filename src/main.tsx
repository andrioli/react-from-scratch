import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import * as ReduxThunk from 'redux-thunk';
import App from './components/App';
import counter from './reducers/counter';

const store = Redux.createStore(counter,
  composeWithDevTools(Redux.applyMiddleware(ReduxThunk.default)));

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root'),
);
