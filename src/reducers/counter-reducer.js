export default function counterReducer(state, action) {
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
        counter: state.counter + action.payload,
        isLoading: false,
        isUpdated: true
      }
    case "COUNTER_DECREMENT":
      console.log("Decrementing Counter....");
      return {
        ...state,
        counter: state.counter - action.payload,
        isLoading: false,
        isUpdated: true
      }
    default:
      return state;
  }  
  return state;
}
