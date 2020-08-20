import React,{useState} from 'react';
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
import UseRefDemo from './components/useref-demo';
import UseEffectDemo from './components/useeffect-demo';
import ModalDemo from './components/modal-demo';
import TabDemo from './components/tab-demo';
import ContextDemo from './components/context-demo';



function TodoApp() {
  const [show, toggleShow] = useState(true);

  const onToggleShow = (e) => {
    toggleShow(show => !show)
  }

  return (
    <Router>
      <div className ="App">
        <AppHeader className="header"
          subTitle= "awesomeapp">
          React Tutorial
  <button onClick={onToggleShow}>Toggle Show (useEffect) - {show.toString()}</button>
        </AppHeader>
        <nav className="top-menu">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/counterfn">Counter useState fn</NavLink>
          <NavLink to="/counterclass">Counter Class</NavLink>
          <NavLink to="/countermultiplestate">Counter Multiple State</NavLink>
          <NavLink to="/usestatedemo">useState Demo</NavLink>
          <NavLink to="/usereducerdemo">useReducer Demo</NavLink>
          <NavLink to="/userefdemo">useRef Demo</NavLink>
          <NavLink to="/useeffectdemo">useEffect Demo</NavLink>
          <NavLink to="/modaldemo">Modal Demo</NavLink>
          <NavLink to="/tabdemo">Tab Demo</NavLink>
          <NavLink to="/contextdemo">Context Demo</NavLink>

        </nav>
        <div className="content">
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
            <Route path="/userefdemo">
              <UseRefDemo />
            </Route>
            <Route path="/useeffectdemo">
              {show && <UseEffectDemo  /> }
            </Route>
            <Route path="/modaldemo">
              <ModalDemo />
            </Route>
            <Route path="/tabdemo">
              <TabDemo />
            </Route>
            <Route path="/contextdemo">
              <ContextDemo />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default TodoApp;
