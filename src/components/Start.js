import styles from "../style/start.module.css";
import React from "react";
import StartPNG from "../start.png";

// import "./App.css";
import "@fontsource/aileron";

function Start({ urls }) {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        {/* <h1> Your Rainbow is Ready</h1>
        <h2> Click through to start...</h2> */}
        <img className={styles.area} src={StartPNG} />
      </div>
    </div>
  );
}

export default Start;
