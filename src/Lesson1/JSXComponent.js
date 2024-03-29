import React from "react";

// const JSXComponent = () => {
//   return <div>
// <h2>Hello from JSX Component</h2>
// </div>;
// };

const JSXComponent = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", { id: "jsx-id" }, "Hello from JSX Component")
  );
};

export default JSXComponent;
