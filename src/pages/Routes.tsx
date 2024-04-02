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
import { ProfileEdit } from "./ProfileEdit/ProfileEdit";
import { FundraisersCreate } from "./FundraisersCreate/FundraisersCreate";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        title: "Home",
        footer: true,
      },
      {
        path: "/fundraisers",
        element: <Fundraisers />,
        title: "Fundraisers",
        main: true,
        footer: true,
      },
      {
        path: "/fundraisers/create",
        element: <FundraisersCreate />,
        title: "Create a Fundraisers",
      },
      {
        path: "/fundraisers/:FundraisersId",
        element: <FundraisersItem />,
        title: "Single Fundraiser",
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
        title: "Marketplace",
        main: true,
        footer: true,
      },
      {
        path: "/marketplace/:collectionId",
        element: <MarketplaceItem />,
        title: "Single Collection",
      },
      {
        path: "/marketplace/:MarketplaceId/:tokenId",
        element: <MarketplaceItemNft />,
        title: "Single NFTs",
      },
      {
        path: "/marketplace/:MarketplaceId/:tokenId/list-for-sale",
        element: "List for Sale",
        title: "List for Sale",
      },
      {
        path: "/marketplace/:MarketplaceId/:tokenId/make-offer",
        element: "Make Offer",
        title: "Make Offer",
      },
      {
        path: "/analyst",
        element: <Analyst />,
        title: "Analyst",
        main: true,
        footer: true,
      },
      {
        path: "/analyst/:AnalystId",
        element: <AnalystItem />,
        title: "Single Analyst Item",
      },
      {
        path: "/about",
        element: <div>about</div>,
        title: "About",
        main: true,
        footer: true,
      },
      {
        path: "/user/:Userid",
        element: <Profile />,
        title: "User Profile",
      },
      {
        path: "/user/:Userid/edit",
        element: <ProfileEdit />,
        title: "User Profile",
      },
      {
        path: "/privacy-policy",
        element: "Privacy Policy",
        title: "Privacy Policy",
        footer2: true,
      },
      {
        path: "terms-of-service",
        element: "Terms of Service",
        title: "Terms of Service",
        footer2: true,
      },
      {
        path: "associated-risks",
        element: "Associated Risks",
        title: "Associated Risks",
        footer2: true,
      },
      {
        path: "help-center",
        element: "Help Center",
        title: "Help Center",
        footer3: true,
      },
      {
        path: "support",
        element: "Support",
        title: "Support",
        footer3: true,
      },
      {
        path: "/*",
        element: "404 Page",
        title: "404 Page",
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
