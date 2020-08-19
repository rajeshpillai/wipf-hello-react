import React, {useReducer, useState} from 'react';
import counterReducer from '../reducers/counter-reducer';
import {COUNTER} from '../constants/counter-constant';

const defaultState = {
  counter: 0,
  error: "",
  isLoading: false,
  isUpdated: false
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, defaultState); // Needs a reducer and a default state
  const [step, setStep] = useState(1);

  const incr = () => {
    if (state.error.trim() != "") {
      //setError("");
      dispatch({type: COUNTER.ERROR, payload: ""})
    }
    
    //setIsLoading((_) => true);
    dispatch({type:COUNTER.LOADING, payload: true});

    setTimeout(() => {
      //  setCounter((prevState) => prevState + 1);
      //  setIsLoading((_) => false);
      //  setIsUpdating((_) => true);
    
      dispatch({
        type:COUNTER.INCREMENT,
        payload: step
      });
    }, 1000);
  }

  const decr = () => {
    if (state.counter == 0) {
      //setError("Counter should not be negative!");
      dispatch({type: COUNTER.ERROR, payload: "Counter should not be negative!"})
      return;
    }
    // setCounter(counter - 1);
    dispatch({
      type:COUNTER.DECREMENT,
      payload: step
    });
  }

  const handleChange = (e) => {
    setStep(Number(e.target.value));
  }
  
  return (
    <div>
      <h2>UseReducer</h2>
      {
        state.error.length > 0 && <div className="error">{state.error}</div>
      }

      Increment By:
      <input type="number" value={step} onChange={handleChange}/>
      
      <h2>{state.counter}</h2>

      {state.isLoading && <h4>Loading....</h4>}
      {state.isUpdated && <h4>Counter successfully updated!!</h4>}
      
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </div>
  )
}

