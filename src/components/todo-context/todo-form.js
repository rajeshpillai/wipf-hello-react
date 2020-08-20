import React, {useRef, useContext} from 'react';
import {TodoContext} from '../context/todoapp-context';

export default function TodoForm() {
  const inputRef = useRef();
  const {onTodoAdded} = useContext(TodoContext);

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