import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./styles.css";
// import Seeker from "./Components/Seeker";

// const useStyle = makeStyles({
//   sideBar: {
//     display: "block",
//     backgroundColor: "red",
//     opacity: "0.6",
//     height: "20vh",
//     width: "100vw",
//   },
// });

function Topbar() {
  // const classes = useStyle();
  return (
    <div className="Topbar">
      <div className="avatar"></div>
      {/* <Seeker></Seeker> */}
      <DataUsageIcon />
      <OpenInNewIcon></OpenInNewIcon>
      <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
    </div>
  );
}

export default Topbar;
