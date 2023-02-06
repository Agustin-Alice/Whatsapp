import React from "react";
import styles from "./creatormessage.module.css";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// import MicNoneIcon from "@mui/icons-material/MicNone";
import SendIcon from "@material-ui/icons/Send";
import { useState, useContext } from "react";
import ChannelContext from "../../../context/chatContext";

function CreatorMessage(props) {
  const [msg, setText] = useState("");
  const { activeChannel, currentUserId } = useContext(ChannelContext);
  const { channel_id } = activeChannel;
  const { chats, setChats } = props;

  // let id = chats.length + 1;

  let message = {
    // el id tiene que ser 1 mayor al ultimo msg del channel_id
    // creator_by_id sirve para saber si el mensaje lo envie yo o no. para ponerle los styles. en que otro momento me sirve saber si era mio o no?
    // id: id,
    text: msg,
    creator_by_id: currentUserId,
    channel_id: channel_id,
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    if (msg.trim() !== "") {
      try {
        await fetch("http://localhost:3002/messages", {
          method: "POST",
          body: JSON.stringify(message),
          headers: {
            "Content-type": "application/json",
          },
        });
        await setChats([...chats, message]);
        setText("");
        // await
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.chatbar}>
      <div className={styles.backbutton}>
        <TagFacesIcon className={styles.icon} />
      </div>
      <div className={styles.backbutton}>
        <AttachFileIcon className={styles.icon} />
      </div>
      <form className={styles.inputForm} onSubmit={sendMessage}>
        <input
          className={styles.text}
          type="text"
          value={msg}
          onChange={handleChange}
        ></input>
      </form>
      <div className={styles.backbutton}>
        {/* {setText !== "" && <MicNoneIcon className={styles.icon} />} */}
        <SendIcon className={styles.icon} onClick={sendMessage} />
      </div>
    </div>
  );
}

export default CreatorMessage;
