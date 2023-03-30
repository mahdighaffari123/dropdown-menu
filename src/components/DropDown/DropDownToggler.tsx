import React from "react";
import { useDropDown } from "./hooks/useDropDown";
import { DropDownStyle } from "./styles/DropDownStyle";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const DropDownToggler: React.FC = () => {
  const { handleToggle, selected, dropDownStatus } = useDropDown();
  const { dropdownToggler } = DropDownStyle();

  return (
    <div onClick={handleToggle} className={dropdownToggler}>
      <span>{selected?.label ? selected?.label : "select an item"}</span>
      {dropDownStatus ? <BsChevronUp /> : <BsChevronDown />}
    </div>
  );
};

export default DropDownToggler;
