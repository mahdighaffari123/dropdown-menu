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
    border: "1px solid #909BC6",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: " space-between",
    padding: "10px 15px",
    borderRadius: "13px",
    transition: "all 0.3s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 0px 5px 0px #B0C0EA",
    },
  },
  dropDownMenu: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1px solid #000",
    listStyle: "none",
    padding: " 10px 15px",
    borderRadius: " 15px",
    marginTop: "10px",
    maxHeight: "230px",
    overflowY: "scroll",
  },
  dropDownItem: {
    padding: "10px",
    margin: "5px 0px",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#F2F4FF",
    },
  },
  active: {
    backgroundColor: "#F2F4FF",
  },
});
