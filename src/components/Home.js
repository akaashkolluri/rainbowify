// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/home.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";

const CLIENT_ID = "7f915cdb16e945578d294e9ee80673a5";
const REDIRECT_URI = `${window.location}rainbow`;
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}> rainbowify</h1>{" "}
        <h3 className={styles.subtitle}> by akaash and jessye</h3>
        <SlideInDown>
          <a
            className={styles.spotifyButton}
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read user-read-recently-played user-library-read`}
          >
            <Icon path={mdiSpotify} size={1.5} className={styles.logo} />{" "}
            {"    Login with Spotify"}
          </a>{" "}
        </SlideInDown>
      </header>
    </div>
  );
}

export default Home;
