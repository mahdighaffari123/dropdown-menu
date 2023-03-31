import React, { memo } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDropDown } from "../../hooks/useDropDown";
import { DropDownStyle } from "../../styles/DropDownStyle";

const DropDownItems: React.FC = (): JSX.Element => {
  // Destructure the necessary properties from the useDropDown hook
  const { handleSelect, items, selected } = useDropDown();

  // Get the styles from the DropDownStyle
  const { dropDownItem, active } = DropDownStyle();

  return (
    <>
      {items.map((item) => {
        return (
          <li
            className={`${dropDownItem} ${
              item.value === selected?.value ? active : ""
            }`}
            onClick={() => handleSelect(item)}
            key={item.value}
          >
            {item.label}
            {item.value === selected?.value && (
              <AiOutlineCheck color="rgb(74 102 255)" />
            )}
          </li>
        );
      })}
    </>
  );
};

export default memo(DropDownItems);
