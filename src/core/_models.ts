// Define the types for the selected item and the list items
export type DropDownItem = {
  label: string | null;
  value: string | null;
};

// Define the return type of the useDropDown hook
export type UseDropDownReturn = {
  handleToggle: (event: React.MouseEvent) => void;
  dropDownStatus: boolean;
  selected: DropDownItem | null;
  handleSelect: (selectedItem: DropDownItem) => void;
  items: DropDownItem[];
  handleAddItem: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
