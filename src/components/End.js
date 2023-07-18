// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/end.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";
import { Button, message, Space } from "antd";

let url = window.location.href;
let home = url.split("rainbow")[0];

function End({ onBack }) {
  const notify = () => {
    message.open({
      type: "success",
      content: "The share function is coming soon",
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <h1 className={styles.title}> rainbowify</h1>{" "}
        <h3 className={styles.subtitle}> did you like your rainbow?</h3>
        <div className={styles.buttonGroup}>
          {" "}
          <a onClick={onBack}>{"  Back  "}</a>{" "}
          <a onClick={notify}>{"  Share   "}</a>{" "}
          <a href={"https://rainbowify.vercel.app/"}>{"  Home  "}</a>
        </div>
      </div>
    </div>
  );
}

export default End;
