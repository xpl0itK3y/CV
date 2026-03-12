import React from "react";
import styles from "../styles/Contacts.module.css";

const ContactLink = ({ href, icon: Icon, text, external = false }) => {
  return (
    <a
      href={href}
      className={styles.link}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Icon />
      <span>{text}</span>
    </a>
  );
};

export default ContactLink;
