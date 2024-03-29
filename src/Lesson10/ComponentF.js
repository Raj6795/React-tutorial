import React, { Component } from "react";
import { UserConsumer } from "../utils/userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(skilname) => {
          return (
            <>
              <div>ComponentF</div>
              <h2>I love {skilname}</h2>
            </>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
