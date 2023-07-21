import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Rainbow from "./components/Rainbow";
import About from "./components/About";
import Privacy from "./components/Privacy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="rainbow" element={<Rainbow />} />
      </Routes>
    </div>
  );
}

export default App;
