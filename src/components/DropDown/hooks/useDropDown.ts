import { useEffect, useRef, useState } from "react";

export const useDropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState<{ label: string; value: string }>();
  const [scrollPosition, setScrollPosition] = useState<number>();
  const menuRef = useRef<any>();
  const handleToggle = (event: any) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.scrollTo({ top: scrollPosition });
    }
  }, [menuRef.current]);

  //   useEffect(() => {
  //     document.body.addEventListener("click", () => setIsExpanded(false));
  //     return () => {
  //       document.body.addEventListener("click", () => setIsExpanded(false));
  //     };
  //   }, []);
  const handleSelect = (selectedItem: { label: string; value: string }) => {
    setSelected(selectedItem);
    setScrollPosition(menuRef.current?.scrollTop);
    setIsExpanded(!isExpanded);
  };

  const dropDownStatus = isExpanded;
  return {
    handleToggle,
    dropDownStatus,
    selected,
    handleSelect,
    menuRef,
  };
};
