import React, { Component } from "react";
// import withCounter from "./hoc/withCounter";

export class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    // const { count, increment } = this.props;
    return <h2 onMouseOver={this.increment}>Hovered {count} times</h2>;
  }
}

// export default withCounter(HoverCounter);
export default HoverCounter;
