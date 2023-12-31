// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/about.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";

function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.about}>
          {" "}
          <a href={"./"}> home </a>
        </h3>
        <h1 className={styles.title}> about</h1> <h2> My Rainbow</h2>
        <h3 className={styles.subtitle}>
          All albums that show up in your rainbow are pulled directly from your
          Spotify top and saved track. Not all colors of your rainbow may be
          filled in because your top songs might not align with all colors. If
          you're looking to improve your rainbow, save some more songs!
        </h3>
        {/* <h2> Creators</h2>
        <h3 className={styles.subtitle}>
          {" "}
          Coded by Akaash Kolluri. Graphic design by Jessye Fan.
                    
           If you have
          feedback, questions, or just want to say hi, feel free to reach out at
          akaash@stanford.edu!
        </h3> */}
        <h2> Privacy</h2>
        <h3 className={styles.subtitle}>
          {" "}
          View our privacy policy <a href={"/privacy"}> here.</a>
        </h3>
      </header>
    </div>
  );
}

export default About;
