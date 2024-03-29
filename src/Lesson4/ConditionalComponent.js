import React, { Component } from "react";

class ConditionalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };
  }

  handleClick = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  render() {
    // If/else render

    // if (this.state.loggedIn) {
    //   return (
    //     <div>
    //       <h2>Hi Raj. Welcome to React.</h2>
    //       <button onClick={this.handleClick}>Logout</button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h2>Hi User. Please login.</h2>
    //       <button onClick={this.handleClick}>Login</button>
    //     </div>
    //   );
    // }

    // variable render
    // let context;

    // if (this.state.loggedIn) {
    //   context = (
    //     <div>
    //       <h2>Hi Raj. Welcome to React.</h2>
    //       <button onClick={this.handleClick}>Logout</button>
    //     </div>
    //   );
    // } else {
    //   context = (
    //     <div>
    //       <h2>Hi User. Please login.</h2>
    //       <button onClick={this.handleClick}>Login</button>
    //     </div>
    //   );
    // }
    // return context;

    // ternary render

    // return this.state.loggedIn ? (
    //   <div>
    //     <h2>Hi Raj. Welcome to React.</h2>
    //     <button onClick={this.handleClick}>Logout</button>
    //   </div>
    // ) : (
    //   <div>
    //     <h2>Hi User. Please login.</h2>
    //     <button onClick={this.handleClick}>Login</button>
    //   </div>
    // );

    // short circuit render

    return (
      this.state.loggedIn && (
        <div>
          <h2>Hi Raj. Welcome to React.</h2>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      )
    );
  }
}

export default ConditionalComponent;
