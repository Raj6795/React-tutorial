import React from "react";

const MemoComponent = (props) => {
  console.log("MemoComponent");
  return <div>MemoComponent {props.name}</div>;
};

export default React.memo(MemoComponent);
// export default MemoComponent;
