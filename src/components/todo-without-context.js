import React, {useState, useRef} from 'react';

export default function TodoWithoutContext(props) {
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
        <h2>Todo without Context</h2>
        <TodoForm onTodoAdded={onTodoAdded} />
        <TodoList data={todos} onTodoDelete={onTodoDelete}/ >
    </TodoApp>
  )
}

function TodoApp({children}) {
  return (
    children
  )
}

function TodoForm({onTodoAdded}) {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    onTodoAdded(inputRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="what do you want to do today?"/>
      <button type="submit">SUBMIT</button>
    </form>

  )
}

function TodoList({data, onTodoDelete}) {
  return(
      data.map((t) => {
        return (
        <TodoItem key={t.id} todo={t} onTodoDelete={onTodoDelete}>{t.title}</TodoItem>
        )
      })
  )
}

function TodoItem({todo,onTodoDelete}) {
  const onDelete = () => {
    onTodoDelete(todo);
  }
  return(
      <li>
        {todo.title} - 
        <button type="button" onClick={onDelete}>delete</button>
      </li>
  )
}
