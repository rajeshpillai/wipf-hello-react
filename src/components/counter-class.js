import React, {Component} from 'react';

// let instance = new CounterClass()
// instance.render();

export default class CounterClass extends Component {
  // state = {
  //   counter: 0,
  //   error: ""
  // }

  // alternative
  constructor() {
    super();
    this.state = {
      counter: 0,
      error: ""
    }

    this.incrAgain = this.incrAgain.bind(this);
  }


  incr = () => {
    if (this.state.error.trim() != "") {
      this.setState({
        error: ""
      })
    }
    this.setState({
     counter: this.state.counter + 1
    });
  }

  decr = () => {
    if (this.state.counter == 0) {
      this.setState({
        error: "Counter should not be negative!"
      })
      return;
    }
    this.setState({
      counter: this.state.counter - 1
    });
  }

  incrAgain () { 
    this.setState({counter: this.state.counter + 1}) 
  }

  
  render() {
    return (
      <div>
        <h2>Counter Class</h2>
        {
          this.state.error.length > 0 && <div className="error">{this.state.error}</div>
        }
        <h2>{this.state.counter}</h2>
        <button onClick={this.incr}>+</button>
        <button onClick={this.decr}>-</button>
  
        <button onClick={this.incrAgain}>++</button>
        
      </div>
    )
  }
}

