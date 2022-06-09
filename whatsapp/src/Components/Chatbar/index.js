import React from "react";
import styles from "./chatbar.module.css";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { useState } from "react";

function Chatbar() {
  const [text, setText] = useState("");
  let message = {
    text: text,
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleText = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/prueba", {
      method: "PUT",
      body: message,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json)
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
    setText("");
  };
  return (
    <div className={styles.chatbar}>
      <div className={styles.backbutton}>
        <TagFacesIcon className={styles.icon} />
      </div>
      <div className={styles.backbutton}>
        <AttachFileIcon className={styles.icon} />
      </div>
      <form className={styles.inputForm} onSubmit={handleText}>
        <input
          className={styles.text}
          type="text"
          value={text}
          onChange={handleChange}
        ></input>
      </form>
      <div className={styles.backbutton}>
        <MicNoneIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Chatbar;
