// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/about.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";

function Privacy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.about}>
          {" "}
          <a href={"./"}> home </a>
        </h3>
        <h1 className={styles.title}> Privacy Policy</h1>
        <br />
        <h3 className={styles.subtitle}>
          {" "}
          Rainbowify is powered by the Spotify Web API. By choosing to use this
          app, you agree to the use of your Spotify account data for extracting
          your top and saved tracks to create your Rainbowify rainbow. Your
          Spotify account data is not stored or collected anywhere, and it is
          not shared with any third parties. All Spotify account data is used
          solely for creating and displaying your Rainbow.
          <br /> <br />
          If you would like to revoke Rainbowify's permissions, you can visit{" "}
          <a
            href={
              "https://www.spotify.com/in-en/account/apps/?_ga=2.57194153.2059435232.1677244602-1044990631.1616788427"
            }
          >
            Spotify's Manage Apps page
          </a>{" "}
          and remove Rainbowify from your list of authorized apps.
        </h3>
      </header>
    </div>
  );
}

export default Privacy;
