import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContent from "./Components/ThemeContext/ThemeContext";
import "antd/dist/antd.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContent>
      <App />
    </ThemeContent>
  </React.StrictMode>
);
