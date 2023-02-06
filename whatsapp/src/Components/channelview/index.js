import { React, useState } from "react";
import styles from "./channelview.module.css";
import TopBarChannel from "./topbarchannel";
import CreatorMessage from "./creatormessage";
import Chat from "./chat";

function Channelview() {
  const [chats, setChats] = useState("");
  return (
    <div className={styles.channelview}>
      <TopBarChannel></TopBarChannel>
      <Chat chats={chats} setChats={setChats}></Chat>
      <CreatorMessage setChats={setChats} chats={chats}></CreatorMessage>
    </div>
  );
}
export default Channelview;
