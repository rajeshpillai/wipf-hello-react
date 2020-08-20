import React, {useState, useRef} from 'react';
import TodoApp from './todo-context/todo-app';
import TodoForm from './todo-context/todo-form';
import TodoList from './todo-context/todo-list';
import TodoItem from './todo-context/todo-item';

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


  return (
    <TodoApp>
        <h2>Todo with Context</h2>
        <TodoForm onTodoAdded={onTodoAdded} />
        <TodoList data={todos} onTodoDelete={onTodoDelete}/ >
    </TodoApp>
  )
}


