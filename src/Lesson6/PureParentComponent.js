import React, { Component } from "react";
import PurePureComponent from "./PurePureComponent";
import PureRegularComponent from "./PureRegularComponent";
import MemoComponent from "./MemoComponent";

class PureParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "React",
      });
    }, 2000);
  }

  handleClick = () => {
    this.setState({
      name: "Redux",
    });
  };
  render() {
    console.log("render in parent comp");
    return (
      <>
        <div>PureParentComponent</div>
        {/* <PurePureComponent name={this.state.name} />
        <PureRegularComponent name={this.state.name} /> */}
        <MemoComponent name={this.state.name} />
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}

export default PureParentComponent;
