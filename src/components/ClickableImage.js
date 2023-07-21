import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import ReactWordcloud from "react-wordcloud";
import { Image } from "antd";
import BlueLogo from "../blue.png";
import SpotifyLogo from "../Spotify_Logo_RGB_Black.png";
// import "./App.css";
import "@fontsource/aileron";

function ClickableImage({ src, style, albumData, backOne }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [artists, setArtsits] = useState();

  useEffect(() => {
    if (src == "empty") return;
    console.log(albumData);
    let artistList = "";
    for (let i = 0; i < albumData.artists.length; i++) {
      artistList += albumData.artists[i].name;
      if (albumData.artists.length > 1 && i == albumData.artists.length - 2) {
        artistList += " & ";
      } else if (i != albumData.artists.length - 1) {
        artistList += ", ";
      }
    }

    setArtsits(artistList);
  }, []);

  const showModal = () => {
    backOne();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    backOne();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    backOne();
    setIsModalOpen(false);
  };

  if (src == "empty") {
    return <img className={style} />;
  }
  return (
    <div>
      {" "}
      <img
        className={style}
        src={src}
        onClick={() => {
          showModal();
        }}
      />
      <Modal
        // title="About Song"
        open={isModalOpen}
        style={{ width: 600 }}
        onOk={handleOk}
        onCancel={handleCancel}
        width={350}
        footer={[
          <img
            src={SpotifyLogo}
            style={{
              width: 90,
              marginRight: 23,
              top: 8,
              position: "relative",
            }}
          />,
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="link"
            href={albumData.external_urls.spotify}
            target="_blank"
            type="primary"
            onClick={handleOk}
          >
            On Spotify
          </Button>,
        ]}
      >
        <img src={src} style={{ width: 300 }} />
        <p>
          {" "}
          {albumData["name"]} by {artists}
        </p>
      </Modal>
    </div>
  );
}

export default ClickableImage;
