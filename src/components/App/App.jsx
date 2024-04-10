import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Fof } from "../../pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
