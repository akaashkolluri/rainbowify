// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image } from "antd";

function Quilt() {
  const [id, setId] = useState("");
  const [topData, setTopData] = useState("");
  const [url, setUrl] = useState("");
  const [albumUrl, setAlbumUrl] = useState("");
  const [red, setRed] = useState("");
  const [blue, setBlue] = useState("");

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

    for (let i = 0; i < 10; i++) {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${id}`,
          },
          params: {
            time_range: "long_term",
            limit: 50,
            offset: i * 50,
          },
        }
      );

      if (data.items.length == 0) break;

      for (let j = 0; j < data.items.length; j++) {
        let albumUrl = data.items[j].album.images[0].url;

        if (!artWork.includes(albumUrl)) {
          artWork.push(albumUrl);
        }
      }
      topTracks = [...topTracks, ...data.items];
    }

    // console.log(topTracks);
    // console.log(artWork);
    setTopData(topTracks);
    setAlbumUrl(artWork);

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

  const makeAlbums = async (artWork) => {
    console.log(artWork[0]);
    let urlEnd = artWork.toString();
    const { data } = await axios.get(
      "https://rainbowify-backend-git-master-akaash.vercel.app/parsesongs?" +
        urlEnd
    );

    console.log(
      "https://rainbowify-backend-git-master-akaash.vercel.app/parsesongs?" +
        urlEnd
    );

    console.log(data);

    // console.log("making albums" + artWork);

    // const img = url(artWork[0]);
    // getColors(artWork[0], {
    //   fallback: "#228B22",
    //   cache: true,
    //   key: url,
    // }).then((x) => console.log("colors", x));

    // console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        {url ? (
          <div>
            {" "}
            <p> Your Quilt</p>
            <Row>
              <Image width={200} height={200} className="thumb" src={url[0]} />
              <Image width={200} height={200} className="thumb" src={url[1]} />
              <Image width={200} height={200} className="thumb" src={url[2]} />
              <Image width={200} height={200} lassName="thumb" src={url[3]} />
            </Row>
            <Row>
              <Image width={200} height={200} className="thumb" src={url[4]} />
              <Image width={200} height={200} className="thumb" src={url[5]} />
              <Image width={200} height={200} className="thumb" src={url[6]} />
              <Image width={200} height={200} lassName="thumb" src={url[7]} />
            </Row>
            <Row>
              <Image width={200} height={200} className="thumb" src={url[8]} />
              <Image width={200} height={200} className="thumb" src={url[9]} />
              <Image width={200} height={200} className="thumb" src={url[10]} />
              <Image width={200} height={200} lassName="thumb" src={url[11]} />
            </Row>
            <Row>
              <Image width={200} height={200} className="thumb" src={url[12]} />
              <Image width={200} height={200} className="thumb" src={url[13]} />
              <Image width={200} height={200} className="thumb" src={url[14]} />
              <Image width={200} height={200} lassName="thumb" src={url[15]} />
            </Row>
          </div>
        ) : (
          <p>A Quilt is on the way!</p>
        )}
      </header>
    </div>
  );
}

export default Quilt;
