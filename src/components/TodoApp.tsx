import * as React from 'react';
import { Helmet } from 'react-helmet';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

import 'todomvc-app-css/index.css';

const TodoApp = () => (
  <div>
    <Helmet>
      <title>TodoMVC</title>
    </Helmet>
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <VisibleTodoList />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://andrioli.github.io">Roberto Araujo</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
);

export default TodoApp;
