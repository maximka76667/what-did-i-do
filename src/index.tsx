import React from "react";
import { createRoot } from "react-dom/client";
import "./index.sass";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
