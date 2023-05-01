import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Launches from "./pages/Launches";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launches" element={<Launches />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
