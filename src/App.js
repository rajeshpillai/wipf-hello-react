import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import AppHeader from './components/app-header';
import Counter from './components/counter';
import CounterClass from './components/counter-class';

function TodoApp() {
  return (
    <Router>
      <div className ="App">
        <AppHeader className="header"
          subTitle= "awesomeapp">
          My Todo App
        </AppHeader>
        <nav className="top-menu">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/counterclass">Counter Class</Link>
          <Link to="/todos">Todo App</Link>
        </nav>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/counterclass">
            <CounterClass />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default TodoApp;
