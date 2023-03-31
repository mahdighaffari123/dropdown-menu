import React, { memo } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDropDown } from "../../hooks/useDropDown";
import { DropDownStyle } from "../../styles/DropDownStyle";

const DropDownToggler: React.FC = (): JSX.Element => {
  // Destructure the neccesary properties from the useDropDown hook
  const { handleToggle, selected, dropDownStatus } = useDropDown();

  // Get the dropDownToggler style from the DropDownStyle
  const { dropdownToggler } = DropDownStyle();

  return (
    <div onClick={handleToggle} className={dropdownToggler}>
      <span>{selected?.label ?? "select an item"}</span>
      {dropDownStatus ? <BsChevronUp /> : <BsChevronDown />}
    </div>
  );
};

export default memo(DropDownToggler);
