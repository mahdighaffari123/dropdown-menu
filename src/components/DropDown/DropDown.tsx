import React from "react";
import { useDropDown } from "./hooks/useDropDown";
import { DropDownStyle } from "./styles/DropDownStyle";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { listItems } from "./mock/listItems";
const DropDown: React.FC = () => {
  const { handleToggle, dropDownStatus, selected, handleSelect, menuRef } =
    useDropDown();

  const {
    root,
    dropdownToggler,
    dropDownWrapper,
    dropDownMenu,
    dropDownItem,
    active,
  } = DropDownStyle();
  return (
    <div className={root}>
      <div className={dropDownWrapper}>
        <div onClick={handleToggle} className={dropdownToggler}>
          <span>{selected?.label ? selected?.label : "select an item"}</span>
          {dropDownStatus ? <BsChevronUp /> : <BsChevronDown />}
        </div>
        {dropDownStatus && (
          <ul className={dropDownMenu} ref={menuRef}>
            {listItems.map((item, index) => (
              <li
                className={`${dropDownItem} ${
                  item.value === selected?.value ? active : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
