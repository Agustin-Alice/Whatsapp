import React from "react";
// import { makeStyles } from "@material-ui/core";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./topbar.module.css";

function Topbar() {
  return (
    <div className={styles.Topbar}>
      {/* <div className={styles.backButton}> */}
      <div className={styles.avatar}></div>
      {/* </div> */}
      <div className={styles.backButton}>
        <DataUsageIcon />
      </div>
      <div className={styles.backButton}>
        <OpenInNewIcon></OpenInNewIcon>
      </div>
      <div className={styles.backButton}>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </div>
    </div>
  );
}

export default Topbar;
