import React from 'react';

function AppHeader(props) {
  return (
    <div>
      <h2>{ props.children }</h2>
      <h3>{ props.subTitle }</h3>
   </div>
  )
}

export default AppHeader;