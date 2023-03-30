import React from "react";
import { useDropDown } from "./hooks/useDropDown";
import { DropDownStyle } from "./styles/DropDownStyle";
import DropDownList from "./DropDownList";
import DropDownToggler from "./DropDownToggler";
const DropDown: React.FC = () => {
  const { dropDownStatus } = useDropDown();

  const { root, dropDownWrapper } = DropDownStyle();

  return (
    <div className={root}>
      <div className={dropDownWrapper}>
        <DropDownToggler />
        {dropDownStatus && <DropDownList />}
      </div>
    </div>
  );
};

export default DropDown;
