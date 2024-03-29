import { Component } from "react";

class StateComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "Click the Login button to sign in",
      count: 0,
    };
  }

  handleLogin = () => {
    this.setState(
      {
        message: "User is logged in",
      },
      () => console.log(this.state.message)
    );
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  };

  handleIncrementTwo = () => {
    this.handleIncrement();
    this.handleIncrement();
  };

  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.handleLogin()}>Login</button>
        <hr></hr>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleIncrementTwo()}>Increment Two</button>
      </div>
    );
  }
}

export default StateComponent;
