import React, {useEffect, useState} from 'react';

function UseEffectDemo(props) {
  const [count, setCount] = useState(0);

  // 1.  This will run everytime when the component is rendered
  useEffect(() => {
    console.log(`Arrow function: Render: Count: ${count}`);

    // Cleanup function -> called internally by React 
    //   (when the component is removed from DOM)
    return () => {
      console.log("1. Do cleanup here like, remove event handlers, timers etc");
    }
  });

  // const fn = () => {}
  // useEffect(fn)

  useEffect(function(){
    console.log(`Normal Function: Render: Count: ${count}`);
  });

  // 2. We want to run the effect only on first mount(render)
  //     (in class component we have a lifecycle event called componentDidMount())
  useEffect(() => {
    console.log("1. Only run first time.")
  }, []);  // The empty deps array

  useEffect(() => {
    console.log("2. Only run first time.")
  }, []);  // The empty deps array


  // 3.  Used to simulate componentDidUmount event in class.....

  useEffect(() => {
    // Do some operations/tasks here

    let timerId = setInterval(() => {
      console.log(+new Date());
    }, 1000);

    return () => {
      console.log("2. Do cleanup here like, remove event handlers, timers etc");
      clearInterval(timerId);
    }
  },[]);


  // 4. useEffect with parameter, will fire everytime the parameter changes
  //    including cleanup will fire as well.
  useEffect(() => {
    console.log(`When deps changes: ${count}`);
    return ()=> {
      console.log("This will fire anytime the deps change!!")
    }
  },[count])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(count - 1)}>-</button>
      
    </div>
  )
}

export default UseEffectDemo;