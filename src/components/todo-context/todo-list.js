import React, {useContext} from 'react';
import TodoItem from './todo-item';

export default function TodoList({data}) {
  return(
      data.map((t) => {
        return (
        <TodoItem key={t.id} todo={t}>{t.title}</TodoItem>
        )
      })
  )
}