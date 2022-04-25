import React from "react";
import "./styles.css";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Top() {
  return (
    <div className="top">
      {/* <img className="avatar"></img> */}
      <div className="avatar"></div>
      <DataUsageIcon />
      <OpenInNewIcon />
      <KeyboardArrowDownIcon />
    </div>
  );
}

export default Top;
