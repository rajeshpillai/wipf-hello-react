import React, {useRef} from 'react';
export default function TodoForm({onTodoAdded}) {
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