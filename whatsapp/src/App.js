import React from "react";
import Topbar from "./components/Topbar/index";
import styles from "./app.module.css";

import ChannelsList from "./components/Channelslist/index";
import Channelview from "./components/Channelview";
import ChannelContext from "./context/chatContext";
import { useState } from "react";

function App() {
  const [activeChannel, setActiveChannel] = useState(false);
  const currentUserId = 2;
  return (
    <div className={styles.app}>
      <ChannelContext.Provider
        value={{ activeChannel, setActiveChannel, currentUserId }}
      >
        <div className={styles.sidebar}>
          <Topbar />
          <ChannelsList />
        </div>

        {activeChannel ? (
          <Channelview></Channelview>
        ) : (
          <div className={styles.loading}></div>
        )}
      </ChannelContext.Provider>
    </div>
  );
}
export default App;
