const ChildComponent = (props) => {
  return (
    <div>
      <h2>{props.message}</h2>
      <button onClick={() => props.handleClick("React is my favorite")}>
        Click!
      </button>
    </div>
  );
};

export default ChildComponent;
