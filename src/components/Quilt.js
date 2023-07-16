// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image } from "antd";


function Quilt() {
  const [id, setId] = useState("");
  const [topData, setTopData] = useState("");
  const [url, setUrl] = useState("");

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
    console.log("here is the id" + id);
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/artists",
      {
        headers: {
          Authorization: `Bearer ${id}`,
        },
        params: {
          time_range: "long_term",
          limit: 16,
        },
      }
    );
    
    console.log(data.items);
    setTopData(data.items);

    let urls = [];
    for (let i = 0; i < data.items.length; i++) {
      urls.push(data.items[i].images[0].url);
    }
    for (let i = data.items.length; i < 16; i++) {
      urls.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80b5XJ32XRL1rsnmZl1Ojoorn_EFpEqOEzFZmz99f9w&s"
      );
    }
    setUrl(urls);
    console.log(urls);
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
