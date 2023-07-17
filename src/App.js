import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quilt from "./components/Quilt";
import Temp from "./components/Temp";
import Red from "./components/Red";

const urls = [
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png",
];
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quilt" element={<Quilt />} />
        <Route path="Red" element={<Red urls={urls} />} />
      </Routes>
    </div>
  );
}

export default App;
