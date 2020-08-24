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
import Home from './pages/home';
import ContactUs from './pages/contactus';
import UseRefDemo from './components/useref-demo';
import UseEffectDemo from './components/useeffect-demo';
import ModalDemo from './components/modal-demo';
import TabDemo from './components/tab-demo';
import TodoWithoutContext from './components/todo-without-context';
import TodoWithContext from './components/todo-with-context';

import {ThemeContext} from './context/theme-context';
import Layout from './pages/layout';

import ComponentDemo from './pages/component-demo';

function TodoApp() {
  const [show, toggleShow] = useState(true);

  const onToggleShow = (e) => {
    toggleShow(show => !show)
  }

  const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("red");

    const handleChange = (e) => {
      setTheme(e.target.value);
    }

    return (
      <ThemeContext.Provider value ={theme}>
        <select onChange = {handleChange}>
          <option value="red">Red </option>
          <option value="green">Green </option>
        </select>
        {children}
      </ThemeContext.Provider>

    )
  }

  return (
    <div className ="container-fluid">
      <ThemeProvider>
        <Router>
          <Layout/>
          <AppHeader className="header"
            subTitle= "awesomeapp">
            React Tutorial
            <button onClick={onToggleShow} className="btn btn-primary">
                Toggle Show (useEffect) - {show.toString()}
                <i className="pl-2 fas fa-check-circle"></i>
            </button>
          </AppHeader>
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
              <Route path="/todowithoutcontext">
                <TodoWithoutContext />
              </Route>
              <Route path="/todowithcontext">
                <TodoWithContext />
              </Route>
              <Route path="/contactus" exact>
                <ContactUs />
              </Route>
              <Route path="/componentdemo" exact>
                <ComponentDemo />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default TodoApp;
