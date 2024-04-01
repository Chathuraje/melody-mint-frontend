import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import App from "@/App";
import { Fundraisers } from "./Fundraisers/Fundraisers";
import { Marketplace } from "./Marketplace/Marketplace";
import { MarketplaceItem } from "./MarketplaceItem/MarketplaceItem";
import { MarketplaceItemNft } from "./MarketplaceItemNft/MarketplaceItemNft";
import { FundraisersItem } from "./FundraisersItem/FundraisersItem";
import { Analyst } from "./Analyst/Analyst";
import { AnalystItem } from "./AnalystItem/AnalystItem";
import { Profile } from "./Profile/Profile";

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
        element: <FundraisersItem />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
        title: "Marketplace",
        main: true,
      },
      {
        path: "/marketplace/:collectionId",
        element: <MarketplaceItem />,
      },
      {
        path: "/marketplace/:MarketplaceId/:tokenId",
        element: <MarketplaceItemNft />,
      },
      {
        path: "/analyst",
        element: <Analyst />,
        title: "Analyst",
        main: true,
      },
      {
        path: "/analyst/:AnalystId",
        element: <AnalystItem />,
      },
      {
        path: "/about",
        element: <div>about</div>,
        title: "About",
        main: true,
      },
      {
        path: "/user/:Userid",
        element: <Profile />,
      },
      {
        path: "/*",
        element: <div>404</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
