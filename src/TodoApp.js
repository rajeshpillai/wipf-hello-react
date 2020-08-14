import React from 'react';
import './App.css';
import AppHeader from './components/app-header';

function TodoApp() {
  return (
    <React.Fragment>
      <div className ="App">
         <AppHeader subTitle= "awesomeapp">
           My Todo App
          </AppHeader>
      </div>
    </React.Fragment>
  );
}

export default TodoApp;
