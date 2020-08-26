import React, {useState, useContext, useEffect} from 'react';
import TodoApp from './todo-context/todo-app';
import TodoForm from './todo-context/todo-form';
import TodoList from './todo-context/todo-list';

import {TodoContext} from '../context/todoapp-context';
import { ThemeContext } from '../context/theme-context';

import {useDocumentTitle} from '../hooks/use-document-title';


export default function TodoWithContext(props) {
  
  const [todos, setTodos] = useState(
    [
      {id: 1, title: "todo 1"},
      {id: 2, title: "todo 2"},
      {id: 3, title: "todo 3"},
      {id: 4, title: "todo 4"},
      {id: 5, title: "todo 5"},
    ]
  )

  useDocumentTitle("Todo with Context");

  // useEffect(() => {
  //   document.title = "Todo with Context";
  // })

  const theme = useContext(ThemeContext);

  const onTodoAdded = (todoTitle) => {
    //alert(todo);
    let newTodo = {
      title: todoTitle,
      id: +new Date()
    }

    setTodos([newTodo, ...todos]);
  }

  const onTodoDelete = (todo) => {
    //alert(todo.id);
    let remainingTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos([...remainingTodos]);
  }

  const todoProvider = {
    data: todos,
    onTodoDelete,
    onTodoAdded,
  }

  return (
    <TodoContext.Provider value={todoProvider} >
      <TodoApp theme={theme}>
          <h2>Todo with Context</h2>
          <TodoForm />
          <TodoList data={todos}/ >
      </TodoApp>
    </TodoContext.Provider>
  )
}


