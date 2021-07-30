import react from "react";
import { render } from "react-dom";

const Box = (props) => {
  return (
    <div className="card">
    <div className="card-header">
      Featured
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <div  className="btn btn-primary">{props.username}</div>
    </div>
  </div>
  );
};
export default Box;
