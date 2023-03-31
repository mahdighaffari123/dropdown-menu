import DropDownList from "./DropDownList";
import DropDownToggler from "./DropDownToggler";
import { useDropDown } from "../../hooks/useDropDown";
import { DropDownStyle } from "../../styles/DropDownStyle";

const DropDown: React.FC = (): JSX.Element => {
  // Destructure the necessary properties from the useDropDown hook
  const { dropDownStatus } = useDropDown();

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
