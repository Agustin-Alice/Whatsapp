import React from "react";
// import DataUsageIcon from "@mui/icons-material/DataUsage";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Contact from "./Components/Contact/index";
import Seeker from "./Components/Seeker/index";
// import Top from "./Components/Top/index";
import Topbar from "./Components/Topbar/index";
import "./Components/styles.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Topbar></Topbar>
        <div className="contacts">
          <Seeker />
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
          <Contact></Contact>
        </div>
      </div>
      <div className="right"></div>
      {/* <Top /> */}
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
//   backgroundColor: "black",
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
