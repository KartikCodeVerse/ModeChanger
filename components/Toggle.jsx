import React from "react";
import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        className="toggle"
        type="checkbox"
        id="check"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

export default Toggle;
