import throttle = require('lodash/throttle');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension/developmentOnly';
import * as ReduxThunk from 'redux-thunk';
import App from './components/App';
import { loadState, saveState } from './localStorage';
import { TodoApp } from './models';
import todoApp from './reducers';

const store = Redux.createStore<TodoApp>(todoApp, loadState(),
  ReduxDevTools.composeWithDevTools(Redux.applyMiddleware(ReduxThunk.default)));

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root'),
);
