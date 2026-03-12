import React from "react";
import styles from "../styles/Contacts.module.css";

const ContactText = ({ icon: Icon, text }) => {
  return (
    <div className={styles.contactItem}>
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default ContactText;
