// Create a new class component with a state property as count and set its value to 0,

// Create a new functioanl component named Increment

// Pass the state.count property to the child functional component.

// Render the count value in the functional component

// Create a button in the functional component to increase the count value

// Create an event handler in the class component to update the count value.

// pass the event handler to the child component.

// Create a new child component with a button to decreate the count value.

// Create a new child component with a button to reset the count to 0.

import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incValue = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decValue = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetValue = () => {
    this.setState({ count: 0 });
  };

  render() {
    // return <Increment count={this.state.count} incValue={this.incValue} />;
    return (
      <div>
        <CountValue count={this.state.count} />
        <BtnComponent type={"Increment"} handleClick={this.incValue} />
        <BtnComponent type={"Decremnt"} handleClick={this.decValue} />
        <BtnComponent type={"Reset"} handleClick={this.resetValue} />
      </div>
    );
  }
}

export default Counter;

// const Increment = (props) => {
//   return (
//     <div>
//       <h2>{props.count}</h2>
//       <button onClick={props.incValue}>Increment</button>
//     </div>
//   );
// };

const CountValue = (props) => {
  return <h2>{props.count}</h2>;
};

const BtnComponent = (props) => {
  return <button onClick={props.handleClick}>{props.type}</button>;
};
