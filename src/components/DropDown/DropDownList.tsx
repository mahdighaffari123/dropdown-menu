import React from "react";
import { useDropDown } from "./hooks/useDropDown";
import { DropDownStyle } from "./styles/DropDownStyle";
import { AiOutlineCheck } from "react-icons/ai";

const DropDownList: React.FC = () => {
  const { handleSelect, menuRef, handleAddItem, items, selected } =
    useDropDown();
  const { dropDownMenu, dropDownItem, dropDownInput, active } = DropDownStyle();
  return (
    <ul className={dropDownMenu} ref={menuRef}>
      <input
        type="text"
        placeholder="insert new item and hit enter"
        className={dropDownInput}
        onKeyUp={handleAddItem}
      />
      {items.map((item, index) => {
        return (
          <li
            className={`${dropDownItem} ${
              item.value === selected?.value ? active : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            {item.label}
            {item.value === selected?.value && (
              <AiOutlineCheck color="rgb(74 102 255)" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownList;
