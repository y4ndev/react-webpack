import React from "react";
import img from "./assets/3840x2160 (12).jpg";

export function App() {
  return (
    <>
      <h1>Welcome {new Date().toString}</h1>
      <img src={img} alt="sd" />
    </>
  );
}
