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
import UseStateDemo from './components/usestate-demo';
import CounterFn from './components/counter-fn';
import CounterMultipleState from './components/counter-multiple-state';

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
          <Link to="/counterfn">Counter useState fn</Link>
          <Link to="/counterclass">Counter Class</Link>
          <Link to="/countermultiplestate">Counter Multiple State</Link>
          <Link to="/usestatedemo">useState Demo</Link>
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
        </Switch>
      </div>
    </Router>
  );
}

export default TodoApp;
