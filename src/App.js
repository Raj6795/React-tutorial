import { useState } from "react";
import "./App.css";
// import TableComponent from "./Lesson6/TableComponent";
// import Counter from "./Exercise/Exercise2";
// import EventComponent from "./Lession2/EventComponent";
// import ParentComponent from "./Lesson3/ParentComponent";
// import ConditionalComponent from "./Lesson4/ConditionalComponent";
// import ListComponent from "./Lesson4/ListComponent";
// import StyleComponent from "./Lesson5/StyleComponent";
// import FormComponent from "./Lesson5/FormComponent";
// import MountingComponent from "./Lesson5/MountingComponent";
// import RefComponent from "./Lesson7/RefComponent";
// import RefToClassComponent from "./Lesson7/RefToClassComponent";
// import RefForwardParentComponent from "./Lesson7/RefForwardParentComponent";
// import ErrorParentComponent from "./Lesson8/ErrorParentComponent";
// import ClickCounter from "./Lesson9/ClickCounter";
// import HoverCounter from "./Lesson9/HoverCounter";
// import ComponentC from "./Lesson10/ComponentC";
// import { UserProvider } from "./utils/userContext";
// import PostList from "./Lesson11/PostList";
import ComponentA from "./Lesson10/ComponentA";
import { PropsProvider } from "./utils/propsContext";
import PostLists1 from "./Lesson11/PostLists1";
// import PureParentComponent from "./Lesson6/PureParentComponent";

function App() {
  // const [value, setValue] = useState("Click btn");

  // const handleClick = () => {
  //   setValue("btn Clicked");
  // };
  return (
    <div className="App">
      {/* <StateComponent message="props message" /> */}
      {/* <EventComponent /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <ConditionalComponent /> */}
      {/* <ListComponent /> */}
      {/* <StyleComponent /> */}
      {/* <FormComponent /> */}
      {/* <MountingComponent /> */}
      {/* {value === "Click btn" ? <MountingComponent /> : null}
      <button onClick={handleClick}>{value}</button> */}
      {/* <PureParentComponent /> */}
      {/* <TableComponent /> */}
      {/* <RefComponent /> */}
      {/* <RefToClassComponent /> */}
      {/* <RefForwardParentComponent /> */}
      {/* <ErrorParentComponent /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <UserProvider value="React">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList /> */}
      <PropsProvider
        value={[
          { name: "Raj", skill: "React" },
          { name: "Shahid", skill: "Java" },
        ]}
      >
        <ComponentA />
      </PropsProvider>
      <PostLists1 />
    </div>
  );
}

export default App;

// Context
// 1. Create a context
// 2. Provide a context value
// 3. Consume the context value
