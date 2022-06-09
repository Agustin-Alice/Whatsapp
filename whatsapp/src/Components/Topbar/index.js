import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./topbar.module.css";

function Topbar() {
  return (
    <div className={styles.Topbar}>
      <div className={styles.avatar}></div>
      <DataUsageIcon />
      <OpenInNewIcon></OpenInNewIcon>
      <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
    </div>
  );
}

export default Topbar;
