import styles from "../style/orangemobile.module.css";
import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Image } from "antd";
import OrangeLogo from "../orange.png";
import SpotifyLogo from "../Spotify_Logo_RGB_White.png";
// import "./App.css";
import ClickableImage from "./ClickableImage";
import "@fontsource/aileron";

function Orange({ urls, metaData, backOne }) {
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
        <ClickableImage
          style={styles.img14}
          src={urls[13]}
          albumData={metaData[urls[13]]}
          backOne={backOne}
        />
        {/* <img className={styles.img1} src={urls[0]} />
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
        <img className={styles.img14} src={urls[13]} /> */}
        <img className={styles.orange} src={OrangeLogo} />
        {/* <div className={styles.block1} />
        <div className={styles.block2} />
        <div className={styles.block3} />
        <div className={styles.block4} />
        <div className={styles.block5} />
        <div className={styles.block6} />
        <div className={styles.block7} /> */}
        <img className={styles.spotify} src={SpotifyLogo} />
      </div>
    </div>
  );
}

export default Orange;
