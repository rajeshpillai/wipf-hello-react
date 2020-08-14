import React from 'react';
import './App.css';
import AppHeader from './components/app-header';
import Counter from './components/counter';
function TodoApp() {
  return (
    <div className ="App">
        <AppHeader className="header" 
          subTitle= "awesomeapp">
          My Todo App
        </AppHeader>

        <Counter />
    </div>
  );
}

export default TodoApp;
