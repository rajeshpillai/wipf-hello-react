import React, {useState} from 'react';

export default function CounterClass() {
  console.log("called....");
  // => [stateValue, updaterFunction]

  const [counter, setState] = useState(0); 
  const [error, setError] = useState("");

  const incr = () => {
    if (error.trim() != "") {
      setError("");
    }
    setState(counter + 1);
  }

  const decr = () => {
    if (counter == 0) {
      setError("Counter should not be negative!");
      return;
    }
    setState(counter - 1);
  }
  
  return (
    <div>
      <h2>Counter Class</h2>
      {
        error.length > 0 && <div className="error">{error}</div>
      }
      <h2>{counter}</h2>
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>

      <button onClick={function () { return setState(counter + 1) }}>++</button>
      
    </div>
  )
}

