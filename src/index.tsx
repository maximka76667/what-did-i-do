import React from "react";
import { createRoot } from "react-dom/client";
import "./index.sass";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

const rootContainer = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootContainer!);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
