import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router-dom';
import * as Redux from 'redux';
import { Todo } from '../models';
import TodoApp from './TodoApp';

interface RootProps {
  store: Redux.Store<Todo[]>;
}

const Root = ({ store }: RootProps) => (
  <ReactRedux.Provider store={store}>
    <ReactRouter.BrowserRouter>
      <ReactRouter.Route
        path="/:filter?"
        component={TodoApp}
      />
    </ReactRouter.BrowserRouter>
  </ReactRedux.Provider>
);

export default Root;
