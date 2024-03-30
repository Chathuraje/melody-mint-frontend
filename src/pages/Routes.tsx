import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import App from "@/App";
import { Fundraisers } from "./Fundraisers/AllFundraisers/Fundraisers";
import { AddNewFundraisers } from "./Fundraisers/AddNewFundraisers/AddNewFundraisers";

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
        element: <div>Marketplace ID</div>,
      },
      {
        path: "/marketplace",
        element: <AddNewFundraisers />,
        title: "Marketplace",
        main: true,
      },
      {
        path: "/marketplace/:MarketplaceId",
        element: <div>Marketplace ID</div>,
      },
      {
        path: "/marketplace/:MarketplaceId/collections",
        element: <div>Marketplace ID</div>,
      },
      {
        path: "/marketplace/:MarketplaceId/collections/:CollectionsId",
        element: <div>Marketplace ID</div>,
      },
      {
        path: "/collections/:CollectionsId/nfts",
        element: <div>Marketplace ID</div>,
      },
      {
        path: "/collections/:CollectionsId/nfts/:NftsId",
        element: <div>Marketplace ID</div>,
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
