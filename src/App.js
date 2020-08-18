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
import Home from './components/home';

function TodoApp() {
  return (
    <Router>
      <div className ="App">
        <AppHeader className="header"
          subTitle= "awesomeapp">
          React Tutorial
        </AppHeader>
        <nav className="top-menu">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/counterfn">Counter useState fn</NavLink>
          <NavLink to="/counterclass">Counter Class</NavLink>
          <NavLink to="/countermultiplestate">Counter Multiple State</NavLink>
          <NavLink to="/usestatedemo">useState Demo</NavLink>
          <NavLink to="/usereducerdemo">useReducer Demo</NavLink>
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
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default TodoApp;
