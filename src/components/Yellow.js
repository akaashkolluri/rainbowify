import styles from "../style/yellowmobile.module.css";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Image } from "antd";
import YellowLogo from "../yellow.png";
import SpotifyLogo from "../Spotify_Logo_RGB_White.png";
import ClickableImage from "./ClickableImage";
// import "./App.css";
import "@fontsource/aileron";

function Yellow({ urls, metaData, backOne }) {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <ClickableImage
          style={styles.img1}
          src={urls[0]}
          albumData={metaData[urls[0]]}
          backOne={backOne}
        />
        <ClickableImage
          style={styles.img2}
          src={urls[1]}
          albumData={metaData[urls[1]]}
          backOne={backOne}
        />
        <ClickableImage
          style={styles.img3}
          src={urls[2]}
          albumData={metaData[urls[2]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img4}
          src={urls[3]}
          albumData={metaData[urls[3]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img5}
          src={urls[4]}
          albumData={metaData[urls[4]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img6}
          src={urls[5]}
          albumData={metaData[urls[5]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img7}
          src={urls[6]}
          albumData={metaData[urls[6]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img8}
          src={urls[7]}
          albumData={metaData[urls[7]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img9}
          src={urls[8]}
          albumData={metaData[urls[8]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img10}
          src={urls[9]}
          albumData={metaData[urls[9]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img11}
          src={urls[10]}
          albumData={metaData[urls[10]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img12}
          src={urls[11]}
          albumData={metaData[urls[11]]}
          backOne={backOne}
        />{" "}
        <ClickableImage
          style={styles.img13}
          src={urls[12]}
          albumData={metaData[urls[12]]}
          backOne={backOne}
        />
        <div className={styles.block1} />
        <div className={styles.block2} />
        <div className={styles.block3} />
        <div className={styles.block4} />
        <div className={styles.block5} />
        <div className={styles.block6} />
        <div className={styles.block7} />
        <div className={styles.block8} />
        <div className={styles.block9} />
        <div className={styles.block10} />
        <div className={styles.block11} />
        <div className={styles.block12} />
        <div className={styles.block13} />
        <img className={styles.yellow} src={YellowLogo} />
        <img className={styles.spotify} src={SpotifyLogo} />
      </div>
    </div>
  );
}

export default Yellow;
