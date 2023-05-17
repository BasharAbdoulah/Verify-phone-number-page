import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: "NnEJOXyng4Ra1PjIBfwt",
      }}
    >
      <App />
    </FpjsProvider>
  </React.StrictMode>
);
