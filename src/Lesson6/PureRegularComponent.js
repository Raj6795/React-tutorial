import React, { Component } from "react";

class PureRegularComponent extends Component {
  render() {
    console.log("render in child regular comp");
    return <div>PureRegularComponent {this.props.name}</div>;
  }
}

export default PureRegularComponent;
