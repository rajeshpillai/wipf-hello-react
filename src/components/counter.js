import React, {useState} from 'react';

export default function Counter() {

  const [counter, setState] = useState(0); // => [stateValue, setterFunction]
  
  return (
    <div>
      <h2>Counter</h2>
      <h2>{counter}</h2>
      <button onClick={()=>setState(counter + 1)}>+</button>
      <button onClick={()=>setState(counter - 1)}>-</button>
    </div>
  )
}

