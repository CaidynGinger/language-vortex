import React, { useEffect, useState } from "react";

import classes from "./DropDown.module.scss";
import { DropDownList } from "./DropDownList/DropDownList";

export const DropDown = ({items, onSelectedItem, label}) => {
  const [showHideDropDownList, setShowHideDropDownList] = useState(false);

  const [InputValue, setInputValue] = useState("");

  const [dropDownList, setDropDownList] = useState([]);

  useEffect(() => {
    setDropDownList(
        items.filter((x) =>
        x.toLowerCase().includes(InputValue.toLowerCase())
      )
    );
  }, [InputValue, items]);

  function showDropDownList() {
    if (InputValue !== "") {
        setInputValue("")
    }
    if (showHideDropDownList === true) {
      setShowHideDropDownList(false);
    } else {
      setShowHideDropDownList(true);
    }
  }

  const clickedItemHandler = (event) => {
    onSelectedItem(event);
    setInputValue(event)
    showDropDownList()
  };

  return (
    <div className={classes.AddSatelliteForm}>
      {/* https://codepen.io/chris__sev/pen/LYOyjY */}
      <div className={classes.group}>
        <input
          type="text"
          value={InputValue}
          required
          onClick={showDropDownList}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className={classes.highlight}></span>
        <span className={classes.bar}></span>
        <label>{label}</label>
      </div>
      {showHideDropDownList ? (
        <DropDownList names={dropDownList} onClick={clickedItemHandler} />
      ) : null}
    </div>
  );
};
