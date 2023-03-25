import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tachyons";
import ParticlesBg from "particles-bg";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParticlesBg type="cobweb" color="#ffffff" num={100} bg={{ position: "absolute", zIndex: -1, width: "100%" }} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
