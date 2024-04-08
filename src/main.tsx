import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import { Web3Provider } from "./context/Web3Provider";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3Provider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Web3Provider>
  </React.StrictMode>
);
