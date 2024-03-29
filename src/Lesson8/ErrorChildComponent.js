import React, { Component } from "react";

class ErrorChildComponent extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    if (this.props.cLanguage === "Physics") {
      throw new Error("Physics is not a coding language");
    }
    return <h2>{this.props.cLanguage}</h2>;
  }
}

export default ErrorChildComponent;
