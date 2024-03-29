import React, { Component } from "react";

class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    };
    // this.hanldeClick = this.hanldeClick.bind(this);
  }

  hanldeClick() {
    // Own this object
    this.setState({ message: "I love React!" });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.hanldeClick()}>Click me</button>
      </div>
    );
  }
}

export default EventComponent;
