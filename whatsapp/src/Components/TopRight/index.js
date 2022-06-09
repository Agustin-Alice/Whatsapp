import React from "react";
import styles from "./topright.module.css";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function TopRight() {
  return (
    <div className={styles.topRight}>
      <div className={styles.avatarBack}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.contactInfo}>
        <h1> Pablo Alice </h1>
        <p> Online</p>
      </div>
      <div className={styles.calls}>
        <VideoCallOutlinedIcon />
        <CallOutlinedIcon />
        <SearchOutlinedIcon />
      </div>
    </div>
  );
}

export default TopRight;
