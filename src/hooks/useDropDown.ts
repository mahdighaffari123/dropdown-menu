import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  dropDownExpandStatusAtom,
  dropDownListItemsAtom,
  dropDownSelectedItemAtom,
} from "../core/_atoms";
import { DropDownItem, UseDropDownReturn } from "../core/_models";

// Define the useDropDown hook
export const useDropDown = (): UseDropDownReturn => {
  // Use the useRecoilState hook to get and set the dropdown expand status,
  // the selected item, and the list items
  const [isExpanded, setIsExpanded] = useRecoilState(dropDownExpandStatusAtom);
  const [selected, setSelected] = useRecoilState(dropDownSelectedItemAtom);
  const [items, setItems] = useRecoilState(dropDownListItemsAtom);

  // Toggle the dropdown expand status
  const handleToggle = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsExpanded((prevState) => !prevState);
  }, []);

  // Check if the dropdown is expanded
  const dropDownStatus = isExpanded;

  // Set the selected item, update the scroll position, and toggle the dropdown
  // expand status when an item is selected from the list
  const handleSelect = (selectedItem: DropDownItem): void => {
    setSelected(selectedItem);
    setIsExpanded((prevState) => !prevState);
  };

  // Add a new item to the list when the "Enter" key is pressed
  const handleAddItem = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter" && event.currentTarget.value.length) {
      const newItem = {
        value: (Math.random() + 1).toString(12),
        label: event.currentTarget.value,
      };
      const duplicateItem = items.find((item) => item.label === newItem.label);
      if (!duplicateItem) {
        setItems((prevState) => [newItem, ...prevState]);
        setSelected(newItem);
      } else {
        alert("This item already exists in the list.");
      }
      event.currentTarget.value = "";
    }
  };

  // Return the values and functions needed for the dropdown
  return {
    handleToggle,
    dropDownStatus,
    selected,
    handleSelect,
    items,
    handleAddItem,
  };
};
