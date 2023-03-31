import { useDropDown } from "../../hooks/useDropDown";
import { DropDownStyle } from "../../styles/DropDownStyle";

const DropDownInput: React.FC = (): JSX.Element => {
  // Destructure the handleAddItem property from the useDropDown hook
  const { handleAddItem } = useDropDown();

  // Get the dropDownInput style from the DropDownStyle
  const { dropDownInput } = DropDownStyle();

  return (
    <input
      type="text"
      placeholder="insert new item and hit enter"
      className={dropDownInput}
      onKeyUp={handleAddItem}
    />
  );
};

export default DropDownInput;
