import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Rainbow from "./components/Rainbow";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rainbow" element={<Rainbow />} />
      </Routes>
    </div>
  );
}

export default App;
