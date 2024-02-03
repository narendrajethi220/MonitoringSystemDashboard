import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import HeroSection from "./components/HeroSection.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <HeroSection />
      </Router>
    </div>
  );
};

export default App;
