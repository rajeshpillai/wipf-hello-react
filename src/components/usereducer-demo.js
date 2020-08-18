import React, {useState, useReducer} from 'react';

function counterReducer(state, action) {
  console.log(state, action);
  // REQUIRED:  action->type (mandatory)
  switch(action.type) {
    case "LOADING": 
      return {
        ...state,
        isLoading: true
      }
      break;
    case "ERROR": 
      console.log("Error dispatched...");
      return {
        ...state,
        error: action.payload
      }
      break;
    case "COUNTER_INCREMENT":
      console.log("Incrementing Counter....");
      return {
        ...state,
        counter: state.counter + 1,
        isLoading: false,
        isUpdated: true
      }
    case "COUNTER_DECREMENT":
      console.log("Decrementing Counter....");
      return {
        ...state,
        counter: state.counter - 1,
        isLoading: false,
        isUpdated: true
      }
    default:
      return state;
  }  
  return state;
}

const defaultState = {
  counter: 0,
  error: "",
  isLoading: false,
  isUpdated: false
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, defaultState); // Needs a reducer and a default state

  const incr = () => {
    if (state.error.trim() != "") {
      //setError("");
      dispatch({type: "ERROR", payload: ""})
    }
    
    //setIsLoading((_) => true);
    dispatch({type:"LOADING", payload: true});

    setTimeout(() => {
      //  setCounter((prevState) => prevState + 1);
      //  setIsLoading((_) => false);
      //  setIsUpdating((_) => true);
    
      dispatch({
        type:"COUNTER_INCREMENT"
      });
    }, 3000);
  }

  const decr = () => {
    if (state.counter == 0) {
      //setError("Counter should not be negative!");
      dispatch({type: "ERROR", payload: "Counter should not be negative!"})
      return;
    }
    // setCounter(counter - 1);
    dispatch({
      type:"COUNTER_DECREMENT"
    });
  }
  
  return (
    <div>
      <h2>UseReducer</h2>
      {
        state.error.length > 0 && <div className="error">{state.error}</div>
      }
      
      <h2>{state.counter}</h2>

      {state.isLoading && <h4>Loading....</h4>}
      {state.isUpdated && <h4>Counter successfully updated!!</h4>}
      
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </div>
  )
}

