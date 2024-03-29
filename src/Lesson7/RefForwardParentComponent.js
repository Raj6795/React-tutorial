import React, { Component } from "react";
import RefForwardChildComponent from "./RefForwardChildComponent";

class RefForwardParentComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <RefForwardChildComponent ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default RefForwardParentComponent;
