import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import App from "@/App";
import { Fundraisers } from "./Fundraisers/Fundraisers";
import {
  Marketplace,
  MarketplaceCollection,
  SingleToken,
} from "./Marketplace/Marketplace";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
      },
      {
        path: "/fundraisers",
        element: <Fundraisers />,
        title: "Fundraisers",
        main: true,
      },
      {
        path: "/fundraisers/:FundraisersId",
        element: <div>FundraisersId</div>,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
        title: "Marketplace",
        main: true,
      },
      {
        path: "/marketplace/:collectionId",
        element: <MarketplaceCollection />,
      },
      {
        path: "/marketplace/:MarketplaceId/:tokenId",
        element: <SingleToken />,
      },
      {
        path: "/tracer",
        element: <div>tracer</div>,
        title: "Tracer",
        main: true,
      },
      {
        path: "/tracer/:TracerId",
        element: <div>Tracer ID</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
        title: "About",
        main: true,
      },
      {
        path: "/users",
        element: (
          <div>
            artists Page <Outlet />
          </div>
        ),
        children: [
          {
            path: "/users/:Usersid",
            element: <div>artist ID Page</div>,
          },
        ],
      },
      {
        path: "/*",
        element: <div>404</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
