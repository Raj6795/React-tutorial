import React from "react";

const Columncomponent = () => {
  const names = ["Mahantesh", "Pawan", "Shasha"];
  let context = names.map((name) => (
    <>
      <h1>{name}</h1>
    </>
  ));
  return context;
};

export default Columncomponent;
