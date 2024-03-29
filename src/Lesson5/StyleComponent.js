// import "../styles/style.css";
import styleModule from "../styleModules/style.module.css";
import ChildStyleComponent from "../Lesson5/ChildStyleComponent";

const StyleComponent = () => {
  const style = {
    color: "rgb(255,100,100)",
  };
  return (
    <div>
      <h1 className="heading">StyleComponent</h1>
      <h2 style={{ color: "rgb(100, 100, 255)" }}>Second heading 1</h2>
      <h2 style={style}>Second heading 2</h2>
      <h2 className="heading">Second heading 3</h2>
      <h2 className="headingModule">Second heading 2</h2>
      <h2 className={styleModule.headingModule}>Second heading 2</h2>
      <ChildStyleComponent />
    </div>
  );
};

export default StyleComponent;
