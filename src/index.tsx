import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const appElement = ReactDOM.createRoot(document.getElementById("app")!);
appElement.render(<App />);
