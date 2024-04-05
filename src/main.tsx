import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import { Web3Provider } from "./context/Web3Provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3Provider>
      <RouterProvider router={router} />
    </Web3Provider>
  </React.StrictMode>
);
