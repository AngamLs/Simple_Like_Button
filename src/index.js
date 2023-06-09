import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Counter from "./components/counter";

import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Counter />
    <App />
  </StrictMode>
);
