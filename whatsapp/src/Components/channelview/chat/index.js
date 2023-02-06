import React from "react";
import styles from "./chat.module.css";
import { useContext, useEffect } from "react";
import ChannelContext from "../../../context/chatContext";

function Chat(props) {
  const { activeChannel, currentUserId } = useContext(ChannelContext);
  const { channel_id } = activeChannel;
  // const [chats, setChats] = useState("");
  const { chats, setChats } = props;

  // hace un fetch sin que yo elija un channel, por eso creo que rompe

  useEffect(() => {
    const fetchMessages = async () => {
      let messages = [];
      const options = {
        method: "GET",
      };

      try {
        const data = await fetch(
          `http://localhost:3002/messages/${channel_id}`,
          options
        );
        messages = await data.json();
        setChats(messages);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMessages();
  }, [channel_id]);
  // arreglar styles de chat
  return (
    <div className={styles.chat}>
      {chats !== "" &&
        //agregar keys
        chats
          // .sort((a, b) => b - a)
          .map((msg, key) => {
            // (msg.creator_by_id)?
            return (
              <div className={styles.row}>
                <div
                  className={
                    (msg.creator_by_id === currentUserId && styles.message) ||
                    styles.nomymessage
                  }
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
    </div>
  );
}
export default Chat;
