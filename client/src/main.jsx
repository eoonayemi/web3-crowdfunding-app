import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./contexts";
import { ThirdwebProvider } from "thirdweb/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContractContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <ThemeContextProvider>
        <ContractContextProvider>
          <Router>
            <App />
          </Router>
        </ContractContextProvider>
      </ThemeContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
