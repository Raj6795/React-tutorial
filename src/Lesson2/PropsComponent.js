const PropsComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        Hi my name is {props.name}, I am from {props.location}
      </h2>
      <p>{props.children}</p>
    </div>
  );
};

export default PropsComponent;
