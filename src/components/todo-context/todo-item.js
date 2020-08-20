import React, {useContext}  from 'react';
import {TodoContext} from '../context/todoapp-context';

export default function TodoItem({todo}) {
  const {onTodoDelete} = useContext(TodoContext);

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