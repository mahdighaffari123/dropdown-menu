import { createUseStyles } from "react-jss";

export const DropDownStyle = createUseStyles({
  root: {
    height: "50vh",
    width: "300px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dropDownWrapper: {
    width: "100%",
    position: "relative",
  },
  dropdownToggler: {
    border: "1.5px solid #859aed",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: " space-between",
    padding: "10px 15px",
    borderRadius: "13px",
    transition: "all 0.2s",
    cursor: "pointer",
    boxShadow: "0px 0px 1px 2px #B0C0EA90",
  },
  dropDownMenu: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1px solid #dbdbdb",
    listStyle: "none",
    padding: " 15px 15px",
    borderRadius: " 20px",
    marginTop: "5px",
    maxHeight: "250px",
    overflowY: "scroll",
  },
  dropDownItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "all 0.2s",
    wordBreak: "break-all",
    "&:hover": {
      backgroundColor: "#F2F4FF",
    },
  },
  active: {
    backgroundColor: "#F2F4FF",
    color: "rgb(74, 102, 255)",
  },
  dropDownInput: {
    padding: "10px",
    border: "1px solid #dbdbdb",
    borderRadius: "10px",
    "&:focus-visible": {
      outline: "none",
    },
  },
});
