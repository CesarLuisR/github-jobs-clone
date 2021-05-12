import React from "react";
import "./styles.scss";

const CheckBox = (props) => {
  return (
    <label className={`check-box ${props.type === "radio" && "radio"}`}>
      <input type={props.type} name="radio" />
      <div className="check-box__text">{props.text}</div>
    </label>
  );
};

export default CheckBox;
