import React from "react";
import "./styles.scss";
import { setFullTime, setLocation, Clear } from "../../../controller/action";
import { useDispatch } from "react-redux";

const CheckBox = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (props.type === "radio") {
      dispatch(setLocation(e.target.value));
    } else {
      dispatch(Clear());
      dispatch(setFullTime(e.target.checked));
    }
  };

  return (
    <label className={`check-box ${props.type === "radio" && "radio"}`}>
      <input
        type={props.type}
        name="radio"
        onChange={handleChange}
        value={`${props.type === "radio" ? props.text : ""}`}
      />
      <div className="check-box__text">{props.text}</div>
    </label>
  );
};

export default CheckBox;
