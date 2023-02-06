import styles from "./channelslist.module.css";
import Channel from "../Channel/index";
import { React, useEffect, useState } from "react";
import Seeker from "../Seeker";

function ChannelsList() {
  const [searchText, setSearchText] = useState("");
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetchChannels = async () => {
      let data = "";
      const options = {
        method: "GET",
      };

      try {
        const channelsfetch = await fetch(
          "http://localhost:3002/channels",
          options
        );
        data = await channelsfetch.json();
        setChannels(data);
      } catch (e) {
        console.error("Error:", e);
      }
    };
    fetchChannels();
  }, []);

  return (
    <div className={styles.channelslist}>
      <Seeker setSearchText={setSearchText} />
      {channels
        .filter((channel) => channel.name.includes(searchText))
        .map((channel) => {
          return <Channel channel={channel} searchText={searchText}></Channel>;
        })}
    </div>
  );
}

export default ChannelsList;
//visual informacion y acciones
