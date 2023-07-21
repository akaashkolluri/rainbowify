// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/home.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";

const CLIENT_ID = "";
const REDIRECT_URI = `${window.location}rainbow`;
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const subheaders = [
  "life is prettier in color",
  "the colors of your songs",
  "because who doesn't love rainbows?",
];

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h3 className={styles.about}>
          {" "}
          <a href={"/about"}> about </a>
        </h3>
        <h1 className={styles.title}> rainbowify</h1>{" "}
        <h3 className={styles.subtitle}>
          {" "}
          {subheaders[Math.floor(Math.random() * 3)]}
        </h3>
        <SlideInDown>
          <a
            className={styles.spotifyButton}
            href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read user-read-recently-played user-library-read`}
          >
            {/* <h2 className={styles.buttonCase}> */}
            <Icon path={mdiSpotify} size={1.5} className={styles.logo} />{" "}
            {"    Login with Spotify"}
            {/* </h2> */}
          </a>{" "}
        </SlideInDown>
      </header>
    </div>
  );
}

export default Home;
