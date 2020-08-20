import React from 'react';

export default function TodoApp({theme,children}) {
  return (
    <div className={theme}>
      {children}
    </div>
  )
}
