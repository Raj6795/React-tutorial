import React, { Component } from "react";

class RefComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="name" />
        <p>Sample p</p>
      </div>
    );
  }
}

export default RefComponent;
