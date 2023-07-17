// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CLIENT_ID = process.env.CLIENT_ID2;
const REDIRECT_URI = `${window.location}quilt`;
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Quiltify! <br />
        </p>

        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
        >
          Spotify Login
        </a>
      </header>
    </div>
  );
}

export default Home;
