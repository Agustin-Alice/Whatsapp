import React, { useContext } from "react";
import styles from "./topbarchannel.module.css";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChannelContext from "../../../context/chatContext";

function TopBarChannel() {
  const { activeChannel } = useContext(ChannelContext);
  const { name } = activeChannel;
  return (
    <div className={styles.topbarchannel}>
      <div className={styles.avatarBack}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.contactInfo}>
        <h1> {name} </h1>
        {/* <p> Online</p> */}
      </div>
      <div className={styles.calls}>
        <div className={styles.backButton}>
          <VideoCallOutlinedIcon className={styles.icon} />
        </div>
        <div className={styles.backButton}>
          <CallOutlinedIcon className={styles.icon} />
        </div>
        <div className={styles.backButton}>
          <SearchOutlinedIcon className={styles.icon} />
        </div>
        <div className={styles.backButton}>
          <ExpandMoreIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default TopBarChannel;
