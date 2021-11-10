import React from "react";
import "./styles.css";
import IMAGE from "./download.jpg";
import SVG from "./svgFile.svg";

export default function App() {
  return (
    <>
      <h1>
        React App - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="LOGo" width="300" height="300" />
      <img src={SVG} alt="SVG" width="300" />
    </>
  );
}
