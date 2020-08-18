import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import './App.css';
import AppHeader from './components/app-header';
import Counter from './components/counter';
import CounterClass from './components/counter-class';
import UseStateDemo from './components/usestate-demo';
import CounterFn from './components/counter-fn';
import CounterMultipleState from './components/counter-multiple-state';
import UseReducerDemo from './components/usereducer-demo';

function TodoApp() {
  return (
    <Router>
      <div className ="App">
        <AppHeader className="header"
          subTitle= "awesomeapp">
          React Tutorial
        </AppHeader>
        <nav className="top-menu">
          <Link to="/">Home</Link>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/counterfn">Counter useState fn</NavLink>
          <Link to="/counterclass">Counter Class</Link>
          <Link to="/countermultiplestate">Counter Multiple State</Link>
          <Link to="/usestatedemo">useState Demo</Link>
          <Link to="/usereducerdemo">useReducer Demo</Link>
        </nav>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/counterfn">
            <CounterFn />
          </Route>
          <Route path="/counterclass">
            <CounterClass />
          </Route>
          <Route path="/countermultiplestate">
            <CounterMultipleState />
          </Route>
          <Route path="/usestatedemo">
            <UseStateDemo />
          </Route>
          <Route path="/usereducerdemo">
            <UseReducerDemo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default TodoApp;
