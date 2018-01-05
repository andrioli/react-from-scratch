import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { TodoApp } from '../models';
import App from './App';

interface RootProps {
  store: Redux.Store<TodoApp>;
}

const Root: React.SFC<RootProps> = ({ store }) => (
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>
);

export default Root;
