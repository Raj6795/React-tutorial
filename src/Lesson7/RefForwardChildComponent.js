import React from "react";

const RefForwardChildComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} placeholder="Ref" />
    </div>
  );
});

export default RefForwardChildComponent;
