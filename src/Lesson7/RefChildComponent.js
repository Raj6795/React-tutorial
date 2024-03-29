import React, { Component } from "react";

class RefChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React",
    };

    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="hobby" />
      </div>
    );
  }
}

export default RefChildComponent;
