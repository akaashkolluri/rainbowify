import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quilt from "./components/Quilt";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quilt" element={<Quilt />} />
      </Routes>
    </div>
  );
}

export default App;
