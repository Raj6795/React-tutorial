import React, { Component } from "react";
import RefChildComponent from "./RefChildComponent";

class RefToClassComponent extends Component {
  constructor(props) {
    super(props);

    this.classRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.classRef.current);
    this.classRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <RefChildComponent ref={this.classRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefToClassComponent;
