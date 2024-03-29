import React, { PureComponent } from "react";

class PurePureComponent extends PureComponent {
  render() {
    console.log("render in child pure component");
    return <div>PurePureComponent {this.props.name}</div>;
  }
}

export default PurePureComponent;
