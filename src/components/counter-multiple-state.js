import React, {useState} from 'react';

export default function CounterMultipleState() {
  console.log("called....");

  const [counter, setState] = useState(0); 
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdating] = useState(false);

  const incr = () => {
    if (error.trim() != "") {
      setError("");
    }
    setIsLoading((_) => true);

    setTimeout(() => {
     setState((prevState) => prevState + 1);
     setIsLoading((_) => false);
     setIsUpdating((_) => true);

    }, 3000);

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
      <h2>Counter Multiple State</h2>
      {
        error.length > 0 && <div className="error">{error}</div>
      }
      
      <h2>{counter}</h2>
      {isLoading && <h4>Loading....</h4>}
      {isUpdated && <h4>Counter successfully updated!!</h4>}
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </div>
  )
}

