import styles from "../style/start.module.css";

import StartPNG from "../start.png";
import React, { useState, CSSProperties, useEffect } from "react";
import { Button, message, Space } from "antd";

// import "./App.css";
import "@fontsource/aileron";

function Start({ urls }) {
  useEffect(() => {
    message.open({
      type: "success",
      content: "Your album is ready. Click through to view...",
    });
  }, []);
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
