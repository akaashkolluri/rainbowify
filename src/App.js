import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quilt from "./components/Quilt";
import Temp from "./components/Temp";
import Red from "./components/Red";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rainbow" element={<Quilt />} />
        {/* <Route path="Red" element={<Red urls={urls} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
