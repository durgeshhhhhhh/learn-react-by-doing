import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "Parents" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello React.js, Durgesh!")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
