import React, { useEffect, useState, useRef } from "react";
import Topbar from "./Components/Topbar/index";
import styles from "./app.module.css";
import TopRight from "./Components/TopRight/index";
import Chat from "./Components/Chat/index";
import Chatbar from "./Components/Chatbar/index";
import Contacts from "./Components/Contacts/index";
// import { useEffect } from "react";

function App() {
  // let handleChannel = (result) => {
  //   console.log(result);
  // };

  useEffect(() => {
    fetch("localhost:3002/api/messages")
      .then((res) => res.json)
      .then((result) => console.log(result));
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Topbar />
        <Contacts />
      </div>
      <div className={styles.right}>
        <TopRight />
        <Chat />
        <Chatbar />
      </div>
    </div>
  );
}
export default App;
// app: {
//   width: "100vw",
//   height: "100vh",
//   position: "absolute",
// },
// appLeft: {
//   display: "flex",
//   width: "30vw",
//   height: "100vh",
//   color: "red",
//   backgroundColor: "black",a
//   left: "0",
// },
// sidebarLeft: {
//  : "",
// },
// contacts: {
//   : "",
// },
// seeker: {
//   : "",
// },
// appRight: {
//   display: "flex",
//   width: "70vw",
//   height: "100vh",
//   backgroundColor: "red",
//   right: "0",
// },
// sidebarRight: {
//  : "",
// },
// chat: {
//  : "",
// },
// sidebarBottom: {
//   : "",
// },
