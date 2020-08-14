import React from 'react';
import './App.css';
import Header from './components/header';

function TodoApp() {
  return (
    <React.Fragment>
      <div className ="App">
         <Header>My Todo App</Header>
      </div>
    </React.Fragment>
  );
}

export default TodoApp;
