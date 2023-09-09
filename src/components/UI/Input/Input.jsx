import React from "react";
import classes from "./Input.module.scss";

export const Input = ({ type, value, onClick, onChange, label, disabled }) => {
  return (
    <div className={classes.group}>
      <input
        type={type}
        value={value}
        required
        onClick={onClick}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={classes.highlight}></span>
      <span className={classes.bar}></span>
      <label>{label}</label>
    </div>
  );
};
