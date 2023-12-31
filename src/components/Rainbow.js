// import logo from "./logo.svg";
// import "./App.css";
import React, { useState, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

import axios from "axios";
import { Row, Col, Image } from "antd";

import Animation from "./Animation.tsx";
import Red from "./Red.js";
import Orange from "./Orange.js";
import Yellow from "./Yellow.js";
import Green from "./Green.js";
import Blue from "./Blue.js";
import Purple from "./Purple.js";
import White from "./White.js";
import Black from "./Black.js";
import Grey from "./Grey.js";

function Rainbow() {
  const [id, setId] = useState("");
  const [topData, setTopData] = useState("");
  const [url, setUrl] = useState("");
  const [metaData, setMetaData] = useState("");
  const [albumUrl, setAlbumUrl] = useState("");
  const [colors, setColors] = useState("");
  const [blue, setBlue] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    let id = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];

    setId(id);
    makeQuilt(id);
  }, []);

  const makeQuilt = async (id) => {
    let topTracks = [];
    let artWork = [];
    let metaData = [];

    for (let i = 0; i < 3; i++) {
      let term = "short_term";
      if (i == 1) term = "medium_term";
      if (i == 2) term = "long_term";
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${id}`,
          },
          params: {
            limit: 50,
            offset: 0,
            time_range: term,
          },
        }
      );

      if (data.items.length == 0) break;

      for (let j = 0; j < data.items.length; j++) {
        let albumUrl = data.items[j].album.images[0].url;

        if (!artWork.includes(albumUrl)) {
          artWork.push(albumUrl);
          metaData[albumUrl] = data.items[j].album;
        }
      }
      topTracks = [...data.items, ...topTracks];
    }

    for (let i = 0; i < 5; i++) {
      const { data } = await axios.get("https://api.spotify.com/v1/me/tracks", {
        headers: {
          Authorization: `Bearer ${id}`,
        },
        params: {
          limit: 50,
          offset: i * 50,
        },
      });

      if (data.items.length == 0) break;

      for (let j = 0; j < data.items.length; j++) {
        let albumUrl = data.items[j].track.album.images[0].url;
        console.log("album of saved track");
        if (!artWork.includes(albumUrl)) {
          artWork.push(albumUrl);
          metaData[albumUrl] = data.items[j].track.album;
        }
      }
      topTracks = [...data.items, ...topTracks];
    }

    // for (let i = 0; i < 30; i++) {
    //   const { data } = await axios.get(
    //     "https://api.spotify.com/v1/me/player/recently-played",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${id}`,
    //       },
    //       params: {
    //         limit: 50,
    //         offset: i * 50,
    //       },
    //     }
    //   );

    //   if (data.items.length == 0) break;

    //   console.log("recently played" + i + " " + data.items.length);

    //   for (let j = 0; j < data.items.length; j++) {
    //     let albumUrl = data.items[j].track.album.images[0].url;

    //     if (!artWork.includes(albumUrl)) {
    //       artWork.push(albumUrl);
    //       console.log("GO");
    //     }
    //   }
    //   topTracks = [...topTracks, ...data.items];

    // console.log(topTracks);
    // console.log(artWork);
    setTopData(topTracks);
    setAlbumUrl(artWork);
    setMetaData(metaData);

    makeAlbums(artWork);

    // let urls = [];
    // for (let i = 0; i < data.items.length; i++) {
    //   urls.push(data.items[i].images[0].url);
    // }
    // for (let i = data.items.length; i < 16; i++) {
    //   urls.push(
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80b5XJ32XRL1rsnmZl1Ojoorn_EFpEqOEzFZmz99f9w&s"
    //   );
    // }
    // setUrl(urls);
    // console.log(urls);
  };

  const addAlbums = async (offset, artWork, colorsTemp) => {
    console.log("adding albums");
    let urlEnd = artWork.slice(offset, offset + 30).toString();
    const { data } = await axios.get(
      "https://rainbowify-backend-git-master-akaash.vercel.app/parsesongs?songs=" +
        urlEnd
    );

    console.log("data", data);

    console.log("colorTemp", colorsTemp);
    colorsTemp["red"] = [...colorsTemp["red"], ...data["red"]];
    colorsTemp["orange"] = [...colorsTemp["orange"], ...data["orange"]];
    colorsTemp["yellow"] = [...colorsTemp["yellow"], ...data["yellow"]];
    colorsTemp["green"] = [...colorsTemp["green"], ...data["green"]];
    colorsTemp["blue"] = [...colorsTemp["blue"], ...data["blue"]];
    colorsTemp["purple"] = [...colorsTemp["purple"], ...data["purple"]];

    colorsTemp["red"] = colorsTemp["red"].filter((x) => x != "empty");
    colorsTemp["orange"] = colorsTemp["orange"].filter((x) => x != "empty");
    colorsTemp["yellow"] = colorsTemp["yellow"].filter((x) => x != "empty");
    colorsTemp["green"] = colorsTemp["green"].filter((x) => x != "empty");
    colorsTemp["blue"] = colorsTemp["blue"].filter((x) => x != "empty");
    colorsTemp["purple"] = colorsTemp["purple"].filter((x) => x != "empty");
    colorsTemp = padColors(colorsTemp);
    setColors(colorsTemp);
    console.log(colorsTemp);

    console.log("albums added");
    if (artWork.length > offset + 30 && artWork.length < 200)
      addAlbums(offset + 30, artWork, colorsTemp);
    else setReady(true);
  };

  const makeAlbums = async (artWork) => {
    console.log("num artwork" + artWork.length);

    let urlEnd = artWork.slice(0, 90).toString();
    const { data } = await axios.get(
      "https://rainbowify-backend-git-master-akaash.vercel.app/parsesongs?songs=" +
        urlEnd
    );

    console.log(data);

    console.log(data);
    setColors(data);
    if (artWork.length > 90 && artWork.length < 200)
      addAlbums(90, artWork, data);
    else setReady(true);

    // if (artWork.length > 150) addAlbums(150, artWork);

    // console.log("making albums" + artWork);

    // const img = url(artWork[0]);
    // getColors(artWork[0], {
    //   fallback: "#228B22",
    //   cache: true,
    //   key: url,
    // }).then((x) => console.log("colors", x));

    // console.log(data);
  };

  const padColors = (data) => {
    let red = data["red"];
    let orange = data["orange"];
    let yellow = data["yellow"];
    let green = data["green"];
    let blue = data["blue"];
    let purple = data["purple"];

    for (let i = 0; i < 15; i++) {
      red.push("empty");
      orange.push("empty");
      yellow.push("empty");
      green.push("empty");
      blue.push("empty");
      purple.push("empty");
    }

    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        {colors && ready ? (
          <Animation color={padColors(colors)} metaData={metaData} />
        ) : (
          // <Red urls={colors["red"]} />

          /* 
The follow is taken from https://codepen.io/jackrugile/pen/JddmaX */
          <div>
            <div class="loader">
              <h1 style={{ color: "black" }}>Loading your Spotify rainbow</h1>
              <div class="loader-inner">
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
                <div class="loader-line-wrap">
                  <div class="loader-line"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Rainbow;
