// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SlideInDown } from "react-animated-components";
import styles from "../style/end.module.css";
import Icon from "@mdi/react";
import { mdiSpotify } from "@mdi/js";
import { Button, message, Space } from "antd";
import Red from "./prints/Red";
import Yellow from "./prints/Yellow";
import Green from "./prints/Green";
import Blue from "./prints/Blue";
import Purple from "./prints/Purple";

import html2canvas from "html2canvas";
import Orange from "./prints/Orange";

let url = window.location.href;
let home = url.split("rainbow")[0];

function End({ onBack, urls }) {
  // useEffect(() => {
  //   handleDownloadImage();
  // }, []);

  // const handleDownloadImage = async () => {
  //   // html2canvas(document.getElementById("print3")).then((canvas) => {
  //   //   //document.body.appendChild(canvas)
  //   //   var base64image = canvas.toDataURL("image/png");
  //   //   var link = document.createElement("a");
  //   //   //window.open(base64image , "_blank");
  //   //   link.href = base64image;
  //   //   link.download = "blue-downloaded-image2.png";

  //   //   document.body.appendChild(link);
  //   //   link.click();
  //   //   document.body.removeChild(link);
  //   // });
  //   const element = document.getElementById("print3"),
  //     canvas = await html2canvas(element),
  //     data = canvas.toDataURL("image/png"),
  //     link = document.createElement("a");

  //   console.log(data);
  //   link.href = data;
  //   link.download = "blue-downloaded-image.png";

  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const notify = () => {
    navigator.clipboard.writeText(url);
    message.open({
      type: "success",
      content: "Share link copied to clipboard!",
    });

    // handleDownloadImage();
  };
  return (
    <div className={styles.container} id={"print2"}>
      <div className={styles.area}>
        <h1 className={styles.title}> rainbowify</h1>{" "}
        <h3 className={styles.subtitle}> did you like your rainbow?</h3>
        <div className={styles.buttonGroup}>
          {" "}
          <a onClick={onBack}>{"  Back  "}</a> <a href={"/"}>{"  Home  "}</a>
          <a onClick={notify}>{"  Share   "}</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default End;
