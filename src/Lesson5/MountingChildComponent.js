import { Component } from "react";

class MountingChildComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React",
    };
    console.log("MountingChildComponent constructor");
  }

  componentDidMount = () => {
    console.log("MountingChildComponent componentDidMount");
  };

  // shouldComponentUpdate() {
  //   console.log("MountingChildComponent shouldCoumponentUpdate");
  //   return true;
  // }
  // getSnapshotBeforeUpdate() {
  //   console.log("MountingChildComponent getSnapshotBeforeUpdate");
  //   return null;
  // }
  // componentDidUpdate() {
  //   console.log("MountingChildComponent componentDidUpdate");
  // }

  render() {
    console.log("MountingChildComponent render");
    return <div>MountingChildComponent</div>;
  }
}

export default MountingChildComponent;
