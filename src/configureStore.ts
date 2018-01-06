import throttle = require('lodash/throttle');
import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension/developmentOnly';
import * as ReduxThunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import { Todo } from './models';
import todoApp from './reducers';

const configureStore = () => {
  const store = Redux.createStore<Todo[]>(todoApp, loadState(),
    ReduxDevTools.composeWithDevTools(Redux.applyMiddleware(ReduxThunk.default)));

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
