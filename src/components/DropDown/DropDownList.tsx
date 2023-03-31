import React, { memo } from "react";
import { DropDownStyle } from "../../styles/DropDownStyle";
import DropDownInput from "./DropDownInput";
import DropDownItems from "./DropDownItems";

const DropDownList: React.FC = (): JSX.Element => {
  // Get the dropDownMenu style from the DropDownStyle
  const { dropDownMenu } = DropDownStyle();

  return (
    <ul className={dropDownMenu}>
      <DropDownInput />
      <DropDownItems />
    </ul>
  );
};

export default memo(DropDownList);
