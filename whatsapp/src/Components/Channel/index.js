import { React, useContext, useEffect } from "react";

import styles from "./channel.module.css";
import ChannelContext from "../../context/chatContext";

function Channel(props) {
  const { channel_id, name } = props.channel;
  const { searchText } = props;
  const { setActiveChannel } = useContext(ChannelContext);
  // const [nameStyled, setNameStyled] = useState("");
  let nameMod = "";
  const setChannel = () => {
    setActiveChannel({ channel_id: channel_id, name: name });
  };

  if (name.includes(searchText)) {
    // console.log(searchText);
    let regexp = new RegExp(`(${searchText})`, "g");
    // const nameModify = name;

    nameMod = name.replace(regexp, `<span style="color: red" red>$1</span>`);
  }
  // debugger;
  return (
    <div className={styles.channel} onClick={setChannel}>
      <div className={styles.avatarBack}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.contactText}>
        {(searchText.length > 0 && (
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: nameMod }}
          />
        )) || <span className={styles.text}>{name}</span>}

        <p> {channel_id} </p>
      </div>
    </div>
    /* <p>// Podria ser el ultimo mensaje del channel</p> */
  );
}

export default Channel;

// expresiones regulares para buscar la letra en un string
// useEffect(() => {
//   const handle = () => {
//     console.log(seeked);

//     // if (name.includes(seeked)) {
//     // const index = name.indexOf();
//     // }
//   };
//   handle();
// }, [seeked]);
