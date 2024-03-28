import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import App from "@/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fundraisers",
        element: <div>fundraisers</div>,
      },
      {
        path: "/marketplace",
        element: <div>marketplace</div>,
      },
      {
        path: "/tracer",
        element: <div>tracer</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/*",
        element: <div>404</div>,
      },
    ],
  },
]);
