import styles from "../../style/greenmobile.module.css";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Image } from "antd";
import GreenLogo from "../../green.png";
// import "./App.css";
import "@fontsource/aileron";

function Green({ urls }) {
  return (
    <div className={styles.printarea}>
      <img className={styles.img1} src={urls[0]} />
      <img className={styles.img2} src={urls[1]} />
      <img className={styles.img3} src={urls[2]} />
      <img className={styles.img4} src={urls[3]} />
      <img className={styles.img5} src={urls[4]} />
      <img className={styles.img6} src={urls[5]} />
      <img className={styles.img7} src={urls[6]} />
      <img className={styles.img8} src={urls[7]} />
      <img className={styles.img9} src={urls[8]} />
      <img className={styles.img10} src={urls[9]} />
      <img className={styles.img11} src={urls[10]} />
      <img className={styles.img12} src={urls[11]} />
      <img className={styles.img13} src={urls[12]} />
      <img className={styles.img14} src={urls[13]} />
      <img className={styles.green} src={GreenLogo} />
    </div>
  );
}

export default Green;
