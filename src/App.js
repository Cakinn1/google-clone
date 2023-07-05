import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Routes>
          {/* Home {the one with the searon on} */}
         <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />
          {/* SearchPage {the results page} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

