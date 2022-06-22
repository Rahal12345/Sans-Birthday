import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import GameOne from "./components/gameOne";
import GameTwo from "./components/gameTwo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/game1"} element={<GameOne />} />
          <Route exact path={"/game2"} element={<GameTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
