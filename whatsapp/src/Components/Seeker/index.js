import React from "react";
import styles from "./seeker.module.css";

// import SearchIcon from "@mui/icons-material/Search";
function Seeker(props) {
  //que cambie un state que este en el context y en cuanto cambie el state busque en los channel el que tenga el name parecido
  const setSearchText = props.setSearchText;

  const handleSeeker = (event) => {
    setSearchText(event.target.value.trimStart());
  };
  return (
    <div className={styles.SeekerBack}>
      <input
        className={styles.Search}
        placeholder="Search or start new chat"
        onChange={handleSeeker}
      ></input>
    </div>
  );
}

export default Seeker;
