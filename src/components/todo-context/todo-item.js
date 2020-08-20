import React  from 'react';
export default function TodoItem({todo,onTodoDelete}) {
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