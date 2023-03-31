import { atom } from "recoil";
import { listItems } from "../mock/listItems";
import { DropDownItem } from "./_models";

export const dropDownExpandStatusAtom = atom({
  key: "expand-status",
  default: false,
});

export const dropDownListItemsAtom = atom<DropDownItem[]>({
  key: "drop-down-list-items",
  default: listItems,
});

export const dropDownSelectedItemAtom = atom<DropDownItem>({
  key: "drop-down-selected-item",
  default: {
    value: null,
    label: null,
  },
});
