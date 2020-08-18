import React, {useState} from 'react';

export default function CounterFn() {
  console.log("called....");

  const [counter, setCounter] = useState(0); 
  const [error, setError] = useState("");

  const incr = () => {
    if (error.trim() != "") {
      setError("");
    }
    
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 10);
    
    // Always use the function state updater
    setCounter((prevState) => prevState + 1 );
    setCounter((prevState) => prevState + 1 );
    setCounter((prevState) => {
      return prevState + 1;
    });

  }

  const decr = () => {
    if (counter == 0) {
      setError("Counter should not be negative!");
      return;
    }
    //setCounter(counter - 1);
    setCounter((prevState) => prevState - 1 );
  }
  
  return (
    <div>
      <h2>Counter useState fn</h2>
      {
        error.length > 0 && <div className="error">{error}</div>
      }
      <h2>{counter}</h2>
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
      
    </div>
  )
}

