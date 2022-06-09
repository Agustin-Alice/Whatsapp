import React from "react";
import styles from "./seeker.module.css";
// import SearchIcon from "@mui/icons-material/Search";
function Seeker() {
  return (
    <div className={styles.SeekerBack}>
      <input
        className={styles.Search}
        placeholder="Search or start new chat"
      ></input>
    </div>
  );
}

export default Seeker;
