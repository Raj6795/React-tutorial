import React from "react";

const ListComponent = () => {
  // const names = ["abc", "def", "ghi", "jkl", "abc"];
  const names = [
    {
      id: 1,
      name: "Madhavi",
      hobby: "coding",
    },
    {
      id: 2,
      name: "Pravalika",
      hobby: "travelling",
    },
    {
      id: 3,
      name: "Shashikala",
      hobby: "Cooking",
    },
    {
      id: 4,
      name: "keerthi",
      hobby: "movies",
    },
  ];
  return (
    <div>
      <h2>ListComponent</h2>
      {/* <h3>{names[0]}</h3>
      <h3>{names[1]}</h3>
      <h3>{names[2]}</h3>
      <h3>{names[3]}</h3> */}
      {names.map((name, index) => (
        <div key={name.id}>
          {index !== 0 ? (
            <div>
              <h3 key={name.id}>{name.name}</h3>
              <p>My hobby is {name.hobby}</p>
            </div>
          ) : (
            <p>Condition not satisfied</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
