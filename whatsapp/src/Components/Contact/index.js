import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.avatarBack}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.contactText}>
        <h1> Pablo Alice </h1>
        <p> Ultimo mensaje</p>
      </div>
    </div>
  );
}

export default Contact;
