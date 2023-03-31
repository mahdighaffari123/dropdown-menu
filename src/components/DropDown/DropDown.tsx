import DropDownList from "./DropDownList";
import DropDownToggler from "./DropDownToggler";
import { UseDropDownReturn } from "../../core/_models";
import { useDropDown } from "../../hooks/useDropDown";
import { DropDownStyle } from "../../styles/DropDownStyle";

const DropDown: React.FC = (): JSX.Element => {
  // Destructure the necessary properties from the useDropDown hook
  const { dropDownStatus }: UseDropDownReturn = useDropDown();

  // Get the styles from the DropDownStyle
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
