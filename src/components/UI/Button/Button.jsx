import React from "react";

import classes from "./Button.module.scss";

export const Button = (props, { onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {props.children}
    </button>
  );
};
