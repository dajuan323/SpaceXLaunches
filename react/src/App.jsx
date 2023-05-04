import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import LaunchProfile from "./pages/LaunchProfile";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launches" element={<Launches />}>
          <Route path=":pageId" element={<LaunchProfile />} />
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
