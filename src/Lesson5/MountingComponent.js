import { Component } from "react";
import MountingChildComponent from "./MountingChildComponent";

class MountingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj",
    };
    console.log("MountingComponent constructor");
    // The first part of code to get processed
  }

  componentDidMount = () => {
    console.log("MountingComponent componentDidMount");
    // The third part of code to get processed
  };

  shouldComponentUpdate() {
    console.log("MountingComponent shouldCoumponentUpdate");
    return true;
  }
  // getSnapshotBeforeUpdate() {
  //   console.log("MountingComponent getSnapshotBeforeUpdate");
  //   return null;
  // }
  componentDidUpdate() {
    console.log("MountingComponent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("MountingComponent componentWillUnmount");
  }

  render() {
    console.log("MountingComponent render");
    // The second part of code to get processed
    return (
      <div>
        <div>MountingComponent</div>
        {/* <MountingChildComponent /> */}
      </div>
    );
  }
}

export default MountingComponent;
