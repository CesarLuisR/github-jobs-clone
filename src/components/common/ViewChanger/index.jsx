import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const ViewChanger = ({ icon, text, max, page = 1 }) => {
  let disabled = false;

  const handleChangerPage = () => {
    if (text) return (page = text);
    else {
      if (icon === "more_horiz") return page;
      else if (icon === "chevron_right") {
        if (Number(page) === Number(max)) {
          disabled = true;
          return page;
        }
        disabled = false;
        return Number(page) + 1;
      } else {
        if (Number(page) === 1) {
          disabled = true;
          return page;
        }
        disabled = false;
        return Number(page) - 1;
      }
    }
  };

  return (
    <NavLink
      to={`/${handleChangerPage()}`}
      activeClassName={!icon ? "active" : "none"}
      className={`view-changer ${icon === "more_horiz" && "more"} ${
        disabled && "disabled"
      }`}
    >
      {icon ? (
        <span className="material-icons">{icon}</span>
      ) : (
        <div className="view-changer__text">{text}</div>
      )}
    </NavLink>
  );
};

export default ViewChanger;
