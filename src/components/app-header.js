import React from 'react';

function AppHeader(props) {
  return (
    <header>
      <h2>{ props.children }</h2>
      <h3>{ props.subTitle }</h3>
    </header>
  )
}

export default AppHeader;