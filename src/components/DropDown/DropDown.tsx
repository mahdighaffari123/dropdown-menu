import React from "react";
import { useDropDown } from "./hooks/useDropDown";
import { DropDownStyle } from "./styles/DropDownStyle";
import { BsChevronUp, BsChevronDown, BsCheck } from "react-icons/bs";

import DropDownList from "./DropDownList";
const DropDown: React.FC = () => {
  const { handleToggle, dropDownStatus, selected } = useDropDown();

  const { root, dropdownToggler, dropDownWrapper } = DropDownStyle();

  return (
    <div className={root}>
      <div className={dropDownWrapper}>
        <div onClick={handleToggle} className={dropdownToggler}>
          <span>{selected?.label ? selected?.label : "select an item"}</span>
          {dropDownStatus ? <BsChevronUp /> : <BsChevronDown />}
        </div>
        {dropDownStatus && <DropDownList />}
      </div>
    </div>
  );
};

export default DropDown;
