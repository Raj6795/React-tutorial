import React, { Component } from "react";
import { PropsConsumer } from "../utils/propsContext";

class ComponentB extends Component {
  render() {
    return (
      <PropsConsumer>
        {(userArr) => {
          return (
            <>
              {userArr.map((user) => (
                <h2>
                  Name: {user.name}. Skill: {user.skill}
                </h2>
              ))}
            </>
          );
        }}
      </PropsConsumer>
    );
  }
}

export default ComponentB;
