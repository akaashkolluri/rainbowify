// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/end.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";

function End() {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <h1 className={styles.title}> rainbowify</h1>{" "}
        <h3 className={styles.subtitle}> did you like your rainbow?</h3>
      </div>
    </div>
  );
}

export default End;
