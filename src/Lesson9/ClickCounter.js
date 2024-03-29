import React, { Component } from "react";
import withCounter from "./hoc/withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, increment } = this.props;
    // const { count } = this.state;
    return <button onClick={increment}>Clicked {count} times</button>;
  }
}

export default withCounter(ClickCounter);
// export default ClickCounter;
