import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Course from "./Components/Course";
import Contact from "./Components/Contact";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Course />
    </BrowserRouter>
  );
};
root.render(<App />);
