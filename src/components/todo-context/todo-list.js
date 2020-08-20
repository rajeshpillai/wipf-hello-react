import React from 'react';
import TodoItem from './todo-item';

export default function TodoList({data, onTodoDelete}) {
  return(
      data.map((t) => {
        return (
        <TodoItem key={t.id} todo={t} 
          onTodoDelete={onTodoDelete}>{t.title}</TodoItem>
        )
      })
  )
}