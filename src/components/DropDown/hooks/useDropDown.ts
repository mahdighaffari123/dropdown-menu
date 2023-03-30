import { useEffect, useRef, useState } from "react";
import { listItems } from "../mock/listItems";

export const useDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [selected, setSelected] = useState<{ label: string; value: string }>();

  const [scrollPosition, setScrollPosition] = useState<number>();

  const [items, setItems] =
    useState<{ label: string; value: string }[]>(listItems);

  const menuRef = useRef<HTMLUListElement | null>(null);

  const dropDownStatus = isExpanded;

  const handleToggle = (event: any) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.scrollTo({ top: scrollPosition });
    }
  }, [menuRef.current]);

  const handleSelect = (selectedItem: { label: string; value: string }) => {
    setSelected(selectedItem);
    setScrollPosition(menuRef.current?.scrollTop);
    setIsExpanded(!isExpanded);
  };

  const handleAddItem = (e: any) => {
    if (e.key === "Enter" && e.target.value.length) {
      const item = {
        value: (Math.random() + 1).toString(12),
        label: e.target.value,
      };
      const duplicateItem = items.find(
        (listItem) => listItem.label === item.label
      );
      if (!duplicateItem) {
        setItems((prevState) => [item, ...prevState]);
        setSelected(item);
        e.target.value = "";
      } else {
        alert("this item is exist in the list");
      }
      e.target.value = "";
    }
  };

  return {
    handleToggle,
    dropDownStatus,
    selected,
    handleSelect,
    menuRef,
    items,
    handleAddItem,
  };
};
