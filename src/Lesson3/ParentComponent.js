import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "React class",
    };
  }

  handleClick = (text) => {
    this.setState({
      message: text,
    });
  };

  render() {
    return (
      <ChildComponent
        message={this.state.message}
        handleClick={this.handleClick}
      />
    );
  }
}

export default ParentComponent;
